import styles from './Footer.module.css';
import Modal from '../../shared/ui/modal';
import React, { useState } from 'react';

const Footer: React.FC = () => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className={styles.footer}>
      <button 
          onClick={() => setIsOpen(true)}
          style={{ 
            padding: '10px 20px', 
            background: '#212529;', 
            color: 'black', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          О проекте
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p><strong>Homework - 1,2</strong></p>
        <ul>
          <li>Инициализирован проект с помощью Vite + TypeScript.</li>
          <li>Были созданы App, Header, Footer</li>
          <li>Отображены посты заглушки</li>
          <li>Данные переданы через пропс</li>
          <li>Реализовано переключение темы</li>
          <li>Использованы React.Fragment и key в списках</li>
          <li>Модалка</li>
        </ul>
      </Modal>
    </footer>
  );
};

export default Footer;