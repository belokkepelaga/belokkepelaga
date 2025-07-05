import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    showSocials?: boolean;
    showNewsletter?: boolean;
}

const Footer: React.FC<FooterProps> = ({ 
    showSocials = true,
    showNewsletter = true,
    className,
    ...props 
}) => {
    return (
        <footer className={cn("bg-slate-900/50 backdrop-blur-sm border-t border-white/10", className)} {...props}>
            <div className="container mx-auto px-6 py-16">
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-1">
                        <h4 className="text-xl font-bold text-white mb-4">
                        <span className="special-letter">B</span>elok ke <span className="special-letter">P</span>elaga
                        </h4>
                        <p className="text-white/70 mb-6">KKN-PPM UGM 2025</p>
                        {showSocials && (
                        <div className="flex gap-4">
                            <a href="https://instagram.com/belokkepelaga" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                            <i className="pi pi-instagram"></i>
                            </a>
                            <a href="https://www.tiktok.com/@belokkepelaga?_t=ZS-8xjdAbk7ixF&_r=1" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                            <i className="pi pi-tiktok"></i>
                            </a>
                        </div>
                        )}
                    </div>
                </div>
                
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/50 text-sm">
                        © Tim KKN-PPM UGM Belok ke Pelaga 2025
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;