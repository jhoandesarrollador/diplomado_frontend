// Módulo principal del casino
const CasinoApp = {
    // Configuración inicial
    init: function() {
        console.log('🎰 Iniciando CasinoDeluxe...');
        this.setupEventListeners();
        this.setupAnimations();
        this.showWelcomeMessage();
        this.loadPlayerData();
    },

    // Configurar todos los event listeners
    setupEventListeners: function() {
        // Botones de navegación
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', this.handleNavigation.bind(this));
        });

        // Botón principal "Jugar ahora"
        const playButton = document.getElementById('playButton');
        playButton.addEventListener('click', this.handlePlayButton.bind(this));

        // Botones de juegos
        const gameButtons = document.querySelectorAll('.game-btn');
        gameButtons.forEach(button => {
            button.addEventListener('click', this.handleGameSelection.bind(this));
        });

        // Modal
        this.setupModal();
    },

    // Manejar navegación
    handleNavigation: function(event) {
        const section = event.target.dataset.section;
        console.log(`📂 Navegando a: ${section}`);
        
        // Efecto visual
        event.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            event.target.style.transform = 'scale(1)';
        }, 150);

        // Simular navegación
        switch(section) {
            case 'juegos':
                this.showMessage('🎮 Cargando sección de juegos...');
                break;
            case 'promociones':
                this.showMessage('🎁 Viendo promociones especiales...');
                break;
            case 'ayuda':
                this.showMessage('❓ Abriendo centro de ayuda...');
                break;
            case 'ruleta':
                this.showMessage('🎡 Iniciando ruleta...');
                break;
            case 'torneo':
                this.showMessage('🏆 Viendo torneos activos...');
                break;
            case 'iniciar':
                this.showMessage('🔐 Formulario de inicio de sesión...');
                break;
            case 'registro':
                this.showMessage('📝 Formulario de registro...');
                break;
            default:
                this.showMessage('🔄 Navegando...');
        }
    },

    // Manejar botón principal
    handlePlayButton: function(event) {
        console.log('🎯 Botón principal presionado');
        
        // Animación del botón
        event.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            event.target.style.transform = 'scale(1)';
        }, 150);

        // Mostrar opciones de juego
        this.showGameOptions();
    },

    // Mostrar opciones de juego
    showGameOptions: function() {
        const gamesSection = document.querySelector('.games-section');
        gamesSection.style.display = 'block';
        gamesSection.scrollIntoView({ behavior: 'smooth' });
        
        // Animación de entrada
        const gameButtons = document.querySelectorAll('.game-btn');
        gameButtons.forEach((button, index) => {
            setTimeout(() => {
                button.style.opacity = '0';
                button.style.transform = 'translateY(20px)';
                button.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0)';
                }, 100);
            }, index * 100);
        });
    },

    // Información de los juegos
    gameInfo: {
        'tragamonedas': {
            title: '🎰 Tragamonedas',
            description: '¡Gira los rodillos y gana grandes premios! Tenemos más de 100 máquinas tragamonedas con diferentes temas y jackpots progresivos.',
            action: 'Jugar Tragamonedas'
        },
        'casino-vivo': {
            title: '🎲 Casino en Vivo',
            description: 'Juega con dealers reales en tiempo real. Blackjack, ruleta, baccarat y más juegos en vivo con alta calidad de video.',
            action: 'Entrar al Casino Vivo'
        },
        'mesa': {
            title: '🃏 Juegos de Mesa',
            description: 'Clásicos como poker, blackjack, ruleta y baccarat. Perfectos para jugadores que buscan estrategia y habilidad.',
            action: 'Ver Juegos de Mesa'
        },
        'jackpots': {
            title: '💰 Jackpots',
            description: '¡Grandes premios te esperan! Jackpots progresivos que pueden cambiar tu vida. Algunos superan los $1,000,000.',
            action: 'Ver Jackpots'
        }
    },

    // Manejar selección de juego
    handleGameSelection: function(event) {
        const gameType = event.target.dataset.game;
        console.log(`🎮 Juego seleccionado: ${gameType}`);
        
        // Efecto visual
        event.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            event.target.style.transform = 'scale(1)';
        }, 150);

        // Mostrar información del juego
        this.showGameModal(gameType);
    },

    // Mostrar modal con información del juego
    showGameModal: function(gameType) {
        const modal = document.getElementById('gameModal');
        const title = document.getElementById('modalTitle');
        const description = document.getElementById('modalDescription');
        const playButton = document.getElementById('modalPlayButton');
        
        const gameData = this.gameInfo[gameType];
        
        title.textContent = gameData.title;
        description.textContent = gameData.description;
        playButton.textContent = gameData.action;
        
        // Mostrar modal
        modal.style.display = 'block';
        
        // Configurar botón del modal
        playButton.onclick = () => {
            this.playGame(gameType);
            this.closeModal();
        };
    },

    // Configurar modal
    setupModal: function() {
        const modal = document.getElementById('gameModal');
        const closeBtn = document.querySelector('.close');
        
        // Cerrar modal con X
        closeBtn.onclick = () => {
            this.closeModal();
        };
        
        // Cerrar modal clickeando fuera
        window.onclick = (event) => {
            if (event.target === modal) {
                this.closeModal();
            }
        };
    },

    // Cerrar modal
    closeModal: function() {
        const modal = document.getElementById('gameModal');
        modal.style.display = 'none';
    },

    // Jugar un juego específico
    playGame: function(gameType) {
        console.log(`🚀 Iniciando juego: ${gameType}`);
        
        // Simular carga del juego
        this.showMessage(`🎮 Cargando ${this.gameInfo[gameType].title}...`);
        
        // Simular tiempo de carga
        setTimeout(() => {
            this.showMessage(`✨ ¡${this.gameInfo[gameType].title} listo para jugar!`);
        }, 2000);
    },

    // Configurar animaciones
    setupAnimations: function() {
        // Animación de entrada para elementos principales
        const heroTitle = document.querySelector('.hero-title');
        const mainBanner = document.querySelector('.main-banner');
        const playButton = document.querySelector('.play-button');
        
        // Animación de fade-in
        [heroTitle, mainBanner, playButton].forEach((element, index) => {
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 1s ease';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 300);
            }
        });

        // Animación de pulso para el botón principal
        this.pulseEffect();
    },

    // Efecto de pulso para el botón principal
    pulseEffect: function() {
        const playButton = document.querySelector('.play-button');
        
        setInterval(() => {
            playButton.style.transform = 'scale(1.05)';
            setTimeout(() => {
                playButton.style.transform = 'scale(1)';
            }, 300);
        }, 3000);
    },

    // Mostrar mensaje de bienvenida
    showWelcomeMessage: function() {
        setTimeout(() => {
            this.showMessage('🎉 ¡Bienvenido a CasinoDeluxe! Tu aventura comienza aquí.');
        }, 1500);
    },

    // Mostrar mensaje temporal
    showMessage: function(message) {
        // Crear elemento de mensaje
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff6b35;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            z-index: 1000;
            font-size: 1.1em;
            font-weight: bold;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(messageDiv);
        
        // Animación de entrada
        setTimeout(() => {
            messageDiv.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover mensaje después de 3 segundos
        setTimeout(() => {
            messageDiv.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }, 3000);
    },

    // NUEVA FUNCIÓN: Cargar datos del jugador
    loadPlayerData: function() {
        const savedData = localStorage.getItem('casinoPlayerData');
        if (savedData) {
            this.playerData = JSON.parse(savedData);
            console.log('📊 Datos del jugador cargados:', this.playerData);
        } else {
            this.playerData = {
                coins: 1000,
                level: 1,
                experience: 0,
                gamesPlayed: 0,
                totalWins: 0,
                achievements: []
            };
            this.savePlayerData();
        }
        this.updatePlayerDisplay();
    },

    // NUEVA FUNCIÓN: Guardar datos del jugador
    savePlayerData: function() {
        localStorage.setItem('casinoPlayerData', JSON.stringify(this.playerData));
        console.log('💾 Datos guardados!');
    },

    // NUEVA FUNCIÓN: Actualizar display del jugador
    updatePlayerDisplay: function() {
        this.createPlayerUI();
    },

    // Utilidades extra
    utils: {
        // Generar número aleatorio
        randomNumber: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        
        // Formatear dinero
        formatMoney: function(amount) {
            return new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP'
            }).format(amount);
        },
        
        // Simular ganancia
        simulateWin: function() {
            const amount = this.randomNumber(1000, 100000);
            return this.formatMoney(amount);
        }
    }
};

// ============================================
// NUEVAS FUNCIONES JUNIOR-FRIENDLY
// ============================================

// 1. SISTEMA DE MONEDAS SIMPLE
const CoinSystem = {
    addCoins: function(amount) {
        CasinoApp.playerData.coins += amount;
        CasinoApp.savePlayerData();
        CasinoApp.showMessage(`💰 +${amount} monedas!`);
        CasinoApp.updatePlayerDisplay();
    },

    spendCoins: function(amount) {
        if (CasinoApp.playerData.coins >= amount) {
            CasinoApp.playerData.coins -= amount;
            CasinoApp.savePlayerData();
            CasinoApp.updatePlayerDisplay();
            return true;
        }
        CasinoApp.showMessage('❌ No tienes suficientes monedas!');
        return false;
    },

    // Bonus diario simple
    dailyBonus: function() {
        const lastBonus = localStorage.getItem('lastDailyBonus');
        const today = new Date().toDateString();
        
        if (lastBonus !== today) {
            const bonus = 100;
            this.addCoins(bonus);
            localStorage.setItem('lastDailyBonus', today);
            CasinoApp.showMessage(`🎁 Bonus diario: +${bonus} monedas!`);
        } else {
            CasinoApp.showMessage('⏰ Ya recibiste tu bonus diario!');
        }
    }
};

// 2. MINIJUEGOS SIMPLES
const MiniGames = {
    // Juego de dados simple
    rollDice: function() {
        const cost = 50;
        if (!CoinSystem.spendCoins(cost)) return;

        const dice1 = CasinoApp.utils.randomNumber(1, 6);
        const dice2 = CasinoApp.utils.randomNumber(1, 6);
        const total = dice1 + dice2;

        CasinoApp.showMessage(`🎲 Dados: ${dice1} + ${dice2} = ${total}`);

        if (total === 7 || total === 11) {
            const win = 150;
            CoinSystem.addCoins(win);
            CasinoApp.showMessage(`🎉 ¡Ganaste! +${win} monedas`);
        } else if (total === 2 || total === 12) {
            const win = 200;
            CoinSystem.addCoins(win);
            CasinoApp.showMessage(`🎊 ¡JACKPOT! +${win} monedas`);
        } else {
            CasinoApp.showMessage('😔 Suerte para la próxima!');
        }
    },

    // Ruleta simple
    spinWheel: function() {
        const cost = 75;
        if (!CoinSystem.spendCoins(cost)) return;

        const colors = ['rojo', 'negro', 'verde'];
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        
        const winColor = colors[CasinoApp.utils.randomNumber(0, 2)];
        const winNumber = numbers[CasinoApp.utils.randomNumber(0, 9)];

        CasinoApp.showMessage(`🎡 Ruleta: ${winNumber} ${winColor}`);

        if (winColor === 'verde') {
            const win = 300;
            CoinSystem.addCoins(win);
            CasinoApp.showMessage(`💚 ¡Verde! +${win} monedas`);
        } else if (winNumber <= 5) {
            const win = 100;
            CoinSystem.addCoins(win);
            CasinoApp.showMessage(`🎯 ¡Número bajo! +${win} monedas`);
        } else {
            CasinoApp.showMessage('🎪 ¡Sigue intentando!');
        }
    }
};

// 3. SISTEMA DE LOGROS SIMPLE
const AchievementSystem = {
    achievements: [
        { id: 'firstWin', name: 'Primera Victoria', description: 'Gana tu primer juego', reward: 100 },
        { id: 'coinCollector', name: 'Coleccionista', description: 'Acumula 1000 monedas', reward: 200 },
        { id: 'playerLevel5', name: 'Jugador Experto', description: 'Alcanza nivel 5', reward: 500 },
        { id: 'luckyPlayer', name: 'Jugador Afortunado', description: 'Gana 5 juegos seguidos', reward: 300 }
    ],

    checkAchievements: function() {
        this.achievements.forEach(achievement => {
            if (!CasinoApp.playerData.achievements.includes(achievement.id)) {
                let unlocked = false;

                switch(achievement.id) {
                    case 'firstWin':
                        unlocked = CasinoApp.playerData.totalWins > 0;
                        break;
                    case 'coinCollector':
                        unlocked = CasinoApp.playerData.coins >= 1000;
                        break;
                    case 'playerLevel5':
                        unlocked = CasinoApp.playerData.level >= 5;
                        break;
                }

                if (unlocked) {
                    this.unlockAchievement(achievement);
                }
            }
        });
    },

    unlockAchievement: function(achievement) {
        CasinoApp.playerData.achievements.push(achievement.id);
        CoinSystem.addCoins(achievement.reward);
        CasinoApp.savePlayerData();
        CasinoApp.showMessage(`🏆 Logro desbloqueado: ${achievement.name}!`);
    }
};

// 4. EFECTOS VISUALES SIMPLES
const VisualEffects = {
    // Crear partículas simples
    createParticles: function(element, emoji = '✨') {
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.textContent = emoji;
            particle.style.cssText = `
                position: absolute;
                pointer-events: none;
                font-size: 20px;
                z-index: 1000;
                animation: float 2s ease-out forwards;
            `;
            
            const rect = element.getBoundingClientRect();
            particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }
    },

    // Shake effect simple
    shakeElement: function(element) {
        element.style.animation = 'shake 0.5s';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }
};

// 5. UI DEL JUGADOR
CasinoApp.createPlayerUI = function() {
    // Crear panel de jugador si no existe
    let playerPanel = document.getElementById('playerPanel');
    if (!playerPanel) {
        playerPanel = document.createElement('div');
        playerPanel.id = 'playerPanel';
        playerPanel.style.cssText = `
            position: fixed;
            top: 80px;
            left: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 15px;
            border-radius: 10px;
            border: 2px solid #ff6b35;
            z-index: 999;
            min-width: 220px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        `;
        document.body.appendChild(playerPanel);
    }

    // Actualizar contenido
    playerPanel.innerHTML = `
        <h3>👤 Jugador</h3>
        <p>💰 Monedas: ${this.playerData.coins}</p>
        <p>📊 Nivel: ${this.playerData.level}</p>
        <p>🎮 Juegos: ${this.playerData.gamesPlayed}</p>
        <p>🏆 Victorias: ${this.playerData.totalWins}</p>
        <p>⏰ Tiempo: ${TimeTracker.getPlayTimeFormatted()}</p>
        
        <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 5px;">
            <button onclick="CoinSystem.dailyBonus()" style="
                background: #ff6b35;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
            ">💎 Bonus Diario</button>
            
            <button onclick="UsernameGenerator.showRandomUsername()" style="
                background: #9c27b0;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
            ">🎭 Nombre Random</button>
            
            <button onclick="ThemeSystem.nextTheme()" style="
                background: #2196f3;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
            ">🎨 Cambiar Tema</button>
            
            <button onclick="TimeTracker.showPlayTime()" style="
                background: #4caf50;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
            ">⏰ Tiempo Total</button>
        </div>
    `;
};

// 6. BOTONES DE MINIJUEGOS
function createMiniGameButtons() {
    const gameButtons = document.querySelector('.games-grid');
    if (gameButtons) {
        // Añadir botones de minijuegos
        const diceButton = document.createElement('button');
        diceButton.className = 'game-btn';
        diceButton.innerHTML = '<span class="game-icon">🎲</span> Dados (50 monedas)';
        diceButton.onclick = () => MiniGames.rollDice();
        
        const wheelButton = document.createElement('button');
        wheelButton.className = 'game-btn';
        wheelButton.innerHTML = '<span class="game-icon">🎡</span> Ruleta (75 monedas)';
        wheelButton.onclick = () => MiniGames.spinWheel();
        
        gameButtons.appendChild(diceButton);
        gameButtons.appendChild(wheelButton);
    }
}

// 7. AGREGAR ESTILOS PARA ANIMACIONES
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px); opacity: 1; }
            100% { transform: translateY(-100px); opacity: 0; }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .game-btn:hover {
            animation: pulse 0.5s ease;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Funciones adicionales como desarrollador junior
function addExtraFeatures() {
    // Agregar efectos de sonido simulados
    const soundEffects = {
        click: '🔊 *click*',
        win: '🎉 *ding ding*',
        spin: '🎰 *spinning*'
    };
    
    // Simular sonidos en la consola
    document.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            console.log(soundEffects.click);
        }
    });
    
    // Agregar Easter egg
    let clickCount = 0;
    document.querySelector('.logo').addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            CasinoApp.showMessage('🎁 ¡Easter egg encontrado! Bonus de bienvenida activado.');
            CoinSystem.addCoins(500);
            clickCount = 0;
        }
    });
}

// Función para simular estadísticas del jugador
function playerStats() {
    const stats = {
        balance: CasinoApp.utils.formatMoney(50000),
        level: 'Principiante',
        gamesPlayed: 0,
        totalWins: CasinoApp.utils.formatMoney(0)
    };
    
    console.log('📊 Estadísticas del jugador:', stats);
    return stats;
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 Página cargada, iniciando aplicación...');
    
    // Inicializar módulo principal
    CasinoApp.init();
    
    // Agregar características extra
    addExtraFeatures();
    addAnimationStyles();
    
    // Inicializar todas las nuevas funciones
    initializeExtraFeatures();
    
    // Crear botones de minijuegos
    setTimeout(() => {
        createMiniGameButtons();
    }, 1000);
    
    // Mostrar stats del jugador
    playerStats();
    
    // Verificar logros cada 5 segundos
    setInterval(() => {
        AchievementSystem.checkAchievements();
    }, 5000);
    
    console.log('✅ CasinoDeluxe completamente cargado!');
    console.log('💡 Tip: Escribe "showStats()" en la consola para ver estadísticas avanzadas');
});

// Exportar para uso en otros archivos (si fuera necesario)
window.CasinoApp = CasinoApp;
window.CoinSystem = CoinSystem;
window.MiniGames = MiniGames;

// ============================================
// FUNCIONES ADICIONALES JUNIOR-FRIENDLY
// ============================================

// 8. GENERADOR DE NOMBRES DE USUARIO ALEATORIOS
const UsernameGenerator = {
    prefixes: ['Lucky', 'Gold', 'Diamond', 'Royal', 'Super', 'Mega', 'Epic', 'Star', 'Fire', 'Ice'],
    suffixes: ['Player', 'Gamer', 'Winner', 'Pro', 'Master', 'King', 'Queen', 'Legend', 'Hero', 'Champion'],
    
    generateUsername: function() {
        const prefix = this.prefixes[CasinoApp.utils.randomNumber(0, this.prefixes.length - 1)];
        const suffix = this.suffixes[CasinoApp.utils.randomNumber(0, this.suffixes.length - 1)];
        const number = CasinoApp.utils.randomNumber(1, 999);
        
        return `${prefix}${suffix}${number}`;
    },
    
    showRandomUsername: function() {
        const newUsername = this.generateUsername();
        CasinoApp.showMessage(`🎭 Nuevo nombre: ${newUsername}`);
        console.log(`🎭 Nombre generado: ${newUsername}`);
    }
};

// 9. SISTEMA DE TEMAS SIMPLES
const ThemeSystem = {
    themes: {
        original: {
            primary: '#1a237e',
            secondary: '#ff6b35',
            accent: '#ffeb3b',
            name: 'Azul Clásico'
        },
        purple: {
            primary: '#4a148c',
            secondary: '#e91e63',
            accent: '#00e676',
            name: 'Púrpura Royal'
        },
        green: {
            primary: '#1b5e20',
            secondary: '#ff5722',
            accent: '#ffc107',
            name: 'Verde Esmeralda'
        },
        dark: {
            primary: '#212121',
            secondary: '#ff4081',
            accent: '#00bcd4',
            name: 'Oscuro Neón'
        }
    },
    
    currentTheme: 'original',
    
    applyTheme: function(themeName) {
        if (!this.themes[themeName]) return;
        
        const theme = this.themes[themeName];
        this.currentTheme = themeName;
        
        // Cambiar colores CSS
        document.documentElement.style.setProperty('--primary-color', theme.primary);
        document.documentElement.style.setProperty('--secondary-color', theme.secondary);
        document.documentElement.style.setProperty('--accent-color', theme.accent);
        
        // Actualizar fondo
        document.body.style.background = `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`;
        
        // Guardar tema
        localStorage.setItem('casinoTheme', themeName);
        
        CasinoApp.showMessage(`🎨 Tema cambiado a: ${theme.name}`);
    },
    
    loadSavedTheme: function() {
        const savedTheme = localStorage.getItem('casinoTheme');
        if (savedTheme && this.themes[savedTheme]) {
            this.applyTheme(savedTheme);
        }
    },
    
    nextTheme: function() {
        const themeNames = Object.keys(this.themes);
        const currentIndex = themeNames.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themeNames.length;
        this.applyTheme(themeNames[nextIndex]);
    }
};

// 10. SISTEMA DE CHAT SIMPLE (MENSAJES PREDEFINIDOS)
const ChatSystem = {
    messages: [
        '¡Hola! Bienvenido al casino 🎰',
        '¿Listo para ganar en grande? 💰',
        '¡Los dados están calientes hoy! 🎲',
        '¿Has probado la ruleta? 🎡',
        '¡Que tengas suerte! 🍀',
        '¡El jackpot está cerca! 💎',
        '¡Sigue jugando! 🎮',
        '¡Eres el mejor! 🏆'
    ],
    
    showRandomMessage: function() {
        const randomMsg = this.messages[CasinoApp.utils.randomNumber(0, this.messages.length - 1)];
        CasinoApp.showMessage(`💬 ${randomMsg}`);
    },
    
    // Mostrar mensajes automáticamente
    startAutoMessages: function() {
        setInterval(() => {
            // Solo mostrar cada 30 segundos
            if (Math.random() < 0.1) { // 10% de probabilidad
                this.showRandomMessage();
            }
        }, 30000);
    }
};

// 11. CONTADOR DE TIEMPO JUGANDO
const TimeTracker = {
    startTime: null,
    
    start: function() {
        this.startTime = Date.now();
    },
    
    getPlayTime: function() {
        if (!this.startTime) return 0;
        return Math.floor((Date.now() - this.startTime) / 1000);
    },
    
    getPlayTimeFormatted: function() {
        const seconds = this.getPlayTime();
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        
        if (hours > 0) {
            return `${hours}h ${minutes % 60}m`;
        } else if (minutes > 0) {
            return `${minutes}m ${seconds % 60}s`;
        } else {
            return `${seconds}s`;
        }
    },
    
    showPlayTime: function() {
        const timeText = this.getPlayTimeFormatted();
        CasinoApp.showMessage(`⏰ Tiempo jugando: ${timeText}`);
    }
};

// 12. MEJORAS AL PANEL DE JUGADOR
CasinoApp.createPlayerUI = function() {
    // Crear panel de jugador si no existe
    let playerPanel = document.getElementById('playerPanel');
    if (!playerPanel) {
        playerPanel = document.createElement('div');
        playerPanel.id = 'playerPanel';
        playerPanel.style.cssText = `
            position: fixed;
            top: 80px;
            left: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 15px;
            border-radius: 10px;
            border: 2px solid #ff6b35;
            z-index: 999;
            min-width: 220px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        `;
        document.body.appendChild(playerPanel);
    }

    // Actualizar contenido con nuevas funciones
    playerPanel.innerHTML = `
        <h3>👤 Jugador</h3>
        <p>💰 Monedas: ${this.playerData.coins}</p>
        <p>📊 Nivel: ${this.playerData.level}</p>
        <p>🎮 Juegos: ${this.playerData.gamesPlayed}</p>
        <p>🏆 Victorias: ${this.playerData.totalWins}</p>
        <p>⏰ Tiempo: ${TimeTracker.getPlayTimeFormatted()}</p>
        
        <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 5px;">
            <button onclick="CoinSystem.dailyBonus()" style="
                background: #ff6b35;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
            ">💎 Bonus Diario</button>
            
            <button onclick="UsernameGenerator.showRandomUsername()" style="
                background: #9c27b0;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
            ">🎭 Nombre Random</button>
            
            <button onclick="ThemeSystem.nextTheme()" style="
                background: #2196f3;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
            ">🎨 Cambiar Tema</button>
            
            <button onclick="TimeTracker.showPlayTime()" style="
                background: #4caf50;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
            ">⏰ Tiempo Total</button>
        </div>
    `;
};

// 13. FUNCIÓN PARA CREAR TOOLTIPS SIMPLES
const TooltipSystem = {
    createTooltip: function(element, text) {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.textContent = text;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 8px 12px;
                border-radius: 5px;
                font-size: 12px;
                z-index: 1001;
                pointer-events: none;
                white-space: nowrap;
            `;
            
            const rect = element.getBoundingClientRect();
            tooltip.style.left = (rect.left + rect.width / 2) + 'px';
            tooltip.style.top = (rect.top - 40) + 'px';
            tooltip.style.transform = 'translateX(-50%)';
            
            document.body.appendChild(tooltip);
            element._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (element._tooltip) {
                element._tooltip.remove();
                element._tooltip = null;
            }
        });
    },
    
    addTooltipsToGameButtons: function() {
        setTimeout(() => {
            const gameButtons = document.querySelectorAll('.game-btn');
            gameButtons.forEach(button => {
                const gameType = button.dataset.game;
                if (gameType && CasinoApp.gameInfo[gameType]) {
                    this.createTooltip(button, CasinoApp.gameInfo[gameType].description);
                }
            });
        }, 2000);
    }
};

// Función para inicializar todas las nuevas funciones
function initializeExtraFeatures() {
    // Inicializar tiempo de juego
    TimeTracker.start();
    
    // Cargar tema guardado
    ThemeSystem.loadSavedTheme();
    
    // Iniciar mensajes automáticos
    ChatSystem.startAutoMessages();
    
    // Agregar tooltips
    TooltipSystem.addTooltipsToGameButtons();
    
    // Actualizar UI cada 5 segundos
    setInterval(() => {
        CasinoApp.updatePlayerDisplay();
    }, 5000);
    
    console.log('🎮 Funciones extras inicializadas!');
}

// Función simple para mostrar estadísticas avanzadas
function showAdvancedStats() {
    console.log('📊 ESTADÍSTICAS AVANZADAS DEL CASINO');
    console.log('======================================');
    console.log(`💰 Monedas totales: ${CasinoApp.playerData.coins}`);
    console.log(`🎮 Juegos jugados: ${CasinoApp.playerData.gamesPlayed}`);
    console.log(`🏆 Victorias: ${CasinoApp.playerData.totalWins}`);
    console.log(`⏰ Tiempo jugando: ${TimeTracker.getPlayTimeFormatted()}`);
    console.log(`🎨 Tema actual: ${ThemeSystem.themes[ThemeSystem.currentTheme].name}`);
    console.log(`🏅 Logros desbloqueados: ${CasinoApp.playerData.achievements.length}`);
}

// Agregar comando de consola para estadísticas
window.showStats = showAdvancedStats; 