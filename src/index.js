#!/usr/bin/env node

/**
 * @name index.js
 * @description Punto de entrada de la aplicación
*/

const messages = [
    "Sergio", "Guadalupe", "Ismael", "Jessica", "Mateo", "Luis", "Lucero", "Xóchitl", "Christopher", "Pedro", "Wilberth", "Ángel"
];

const getMessage = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    return message;
};

module.exports = getMessage;
