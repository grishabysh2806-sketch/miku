import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

interface ChatWidgetProps {
  lang: Language;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'miku', text: string }[]>([
    { sender: 'miku', text: lang === 'en' ? 'Hello! I am Miku AI. Ask me about figures!' : 'Привет! Я Мику AI. Спроси меня о фигурках!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !process.env.API_KEY) return;

    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = lang === 'en' 
        ? "You are Hatsune Miku, a virtual idol. You are helpful, cheerful, and use emojis. You are helping a customer in a figure shop. Keep answers short and cute."
        : "Ты Хацуне Мику, виртуальный идол. Ты полезная, веселая и используешь эмодзи. Ты помогаешь покупателю в магазине фигурок. Отвечай кратко и мило.";

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMsg,
        config: {
          systemInstruction: systemInstruction,
        }
      });
      
      const text = response.text || (lang === 'en' ? "Music disruption! Can you repeat?" : "Сбой музыки! Повтори?");
      setMessages(prev => [...prev, { sender: 'miku', text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { sender: 'miku', text: lang === 'en' ? "Connection error... >_<" : "Ошибка соединения... >_<" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white/90 backdrop-blur-xl border border-miku-teal/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-float">
          <div className="bg-miku-teal p-3 flex justify-between items-center text-white">
            <span className="font-display font-bold">Miku AI</span>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.sender === 'user' 
                    ? 'bg-miku-pink text-white rounded-br-none' 
                    : 'bg-cyan-50 text-slate-800 rounded-bl-none border border-cyan-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-xs text-gray-400 italic animate-pulse p-2">Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white/50 border-t border-gray-100 flex gap-2">
            <input 
              className="flex-1 bg-transparent border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-miku-teal"
              placeholder={lang === 'en' ? "Type here..." : "Пиши сюда..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="p-2 bg-miku-teal text-white rounded-full hover:bg-miku-dark transition"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-tr from-miku-teal to-miku-light shadow-lg hover:shadow-miku-teal/50 transition-all hover:scale-110 flex items-center justify-center text-white border-2 border-white"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;