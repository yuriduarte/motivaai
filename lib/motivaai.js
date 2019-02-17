/*!
 * @package: motivaai
 * @description: ~Uma frase de motivação pra dar um UP no seu dia~
 * @version: 0.0.1
 * @author: Fernando Moreira <nandomoreira.me@gmail.com> (https://nandomoreira.me)
 * @license: Licensed under the MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MotivaAi", [], factory);
	else if(typeof exports === 'object')
		exports["MotivaAi"] = factory();
	else
		root["MotivaAi"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{ quote: 'Sucesso é ir de fracasso em fracasso sem perder o entusiasmo.', author: 'Winston Churchill' }, { quote: 'Um homem pode ser tão grande quanto ele queira ser. Se você acredita em si mesmo e tem coragem, determinação, dedicação, iniciativa competitiva e se você está disposto a sacrificar as pequenas coisas da vida e pagar o preço pelas coisas que valem a pena, isso pode ser feito.', author: 'Vince Lombardi' }, { quote: 'Não deixe que o medo de perder seja maior que a excitação de vencer.', author: 'Robert Kiyosaki' }, { quote: 'Na minha experiência, há só uma motivação, e isso é o desejo. Nenhuma razão ou princípio contêm ele ou se levantam contra ele.', author: 'Jane Smiley' }, { quote: 'Dificuldades reais podem ser superadas; apenas as imaginárias são insuperáveis.', author: 'Theodore N. Vail' }, { quote: 'A fortuna fica ao lado daquele que ousa.', author: 'Virgil' }, { quote: 'aqueles que são loucos o suficiente para pensar que podem mudar o mundo são os que o fazem', author: 'Anonymous' }, { quote: 'Pessoas raramente obtém sucesso a menos que se divirtam com o que fazem.', author: 'Dale Carnegie' }, { quote: 'Não tenha medo de desistir do bom para ir ao grande', author: 'John D. Rockefeller' }, { quote: 'Você tem que acordar cada manhã com determinação se você quer ir para a cama com satisfação.', author: 'George Lorimer' }, { quote: 'Há dois tipos de pessoas que dirão que você não pode fazer diferença nesse mundo: aquelas que tem medo de tentar e aquelas que temem que você consiga.', author: 'Ray Goforth' }, { quote: 'Você deve esperar grandes coisas de você mesmo antes de poder faze-las', author: 'Michael Jordan' }, { quote: 'Ninguém pode fazer você se sentir inferior sem o seu consentimento.', author: 'Eleanor Roosevelt' }, { quote: 'Pessoas bem sucedidas fazer o que pessoas não mal-sucedidas não estão dispostas a fazer. Não desejam que seja mais fácil, mas que sejam melhores.', author: 'Jim Rohn' }, { quote: 'Conhecimento é estar ciente do que você pode fazer. Sabedoria é saber quando não fazer.', author: 'Anonymous ' }, { quote: 'Se você não esta disposto a arriscar o habitual, você terá que se contentar com o normal', author: 'Jim Rohn' }, { quote: 'Pegue uma ideia. Faça dessa única ideia a sua vida - pense nela, sonhe com ela, viva essa ideia. Deixe o cérebro, os músculos, os nervos, todas as partes do seu corpo, estarem cheios dessa ideia, e apenas deixe todas as outras ideias em paz. Este é o caminho para o sucesso.', author: 'Swami Vivekananda' }, { quote: 'A razão número um para as pessoas que falham na vida é porque ouvem seus amigos, família e vizinhos.', author: 'Napoleon Hill' }, { quote: 'Nada no mundo é mais comum que pessoas mal-sucedidas com talento.', author: 'Anonymous' }, { quote: 'A função da liderança é produzir mais líderes, não seguidores.', author: 'Ralph Nader' }, { quote: 'Para realizar grandes coisas, devemos não apenas agir, mas também sonhar, não apenas planejar, mas também acreditar', author: ' Anatole France' }, { quote: 'Boas coisas vem para as pessoas que esperam, mas coisas ainda melhores vêm para aquelas que vão e buscam.', author: 'Anonymous' }, { quote: 'Bem-aventurados aqueles que podem dar sem lembrar e levar sem esquecer.', author: 'Anonymous' }, { quote: 'Não levante sua voz, melhore seu argumento.', author: 'Anonymous' }, { quote: 'O sucesso é ... conhecer o seu propósito na vida, crescer para alcançar o seu potencial máximo e semear as sementes que beneficiam os outros.', author: ' John C. Maxwell' }, { quote: 'O sucesso é gostar de você mesmo, gostar do que você faz e gostar de como você faz isso.', author: 'Maya Angelou' }, { quote: 'O que nos parece como julgamentos amargos são muitas vezes bênçãos disfarçadas', author: ' Oscar Wilde' }, { quote: 'Oportunidades não acontecem, você as cria.', author: 'Chris Grosser' }, { quote: 'O significado da vida é encontrar o seu dom. O propósito da vida é entregá-lo.', author: 'Anonymous' }, { quote: 'A vida não é sobre encontrar a si mesmo. A vida é sobre criar você mesmo.', author: 'Lolly Daskal' }, { quote: 'Eu não falhei. Apenas encontrei 10.000 maneiras que não funcionam.', author: 'Thomas A. Edison' }, { quote: 'As coisas funcionam melhor para aqueles que fazem o melhor de como as coisas funcionam.', author: 'John Wooden' }, { quote: 'Grandes mentes discutem ideias; mentes comuns discutem eventos; mentes pequenas discutem pessoas.', author: 'Eleanor Roosevelt' }, { quote: 'If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work', author: 'Thomas J. Watson' }, { quote: 'Empresários de sucesso são doadores e não tomadores de energia positiva.', author: 'Anonymous' }, { quote: 'Se você não pode explicar isso simplesmente, você não entende bem o suficiente. ', author: 'Albert Einstein' }, { quote: 'Para viver uma vida criativa, devemos perder o medo de estar errado.', author: 'Anonymous' }, { quote: 'É melhor falhar na originalidade do que ter sucesso na imitação.', author: 'Herman Melville' }, { quote: 'Nosso maior medo não deve ser o fracasso, mas o sucesso nas coisas da vida que realmente não importam.', author: 'Francis Chan' }, { quote: 'Você mede o tamanho da conquista pelos obstáculos que você teve que superar para alcançar seus objetivos.', author: 'Booker T. Washington' }, { quote: 'Nenhuma obra-prima foi criada por um artista preguiçoso.', author: ' Anonymous' }, { quote: 'Um verdadeiro empreendedor é alguém que não tem rede de segurança por baixo deles.', author: 'Henry Kravis' }, { quote: 'Coragem é resistência ao medo, domínio do medo - não ausência de medo', author: 'Mark Twain' }, { quote: 'Todos os nossos sonhos podem se tornar realidade se tivermos coragem de persegui-los.', author: 'Walt Disney' }, { quote: 'Quando eu me atrevo a ser poderoso - para usar minha força no serviço da minha visão, então torna-se cada vez menos importante se eu tenho medo.', author: 'Audre Lorde' }, { quote: 'Pensar deve se tornar seu ativo de capital, não importa os altos e baixos que você encontra em sua vida.', author: 'Dr. APJ Kalam ' }, { quote: 'Seja miserável ou se motive. O que quer que tenha que ser feito, é sempre sua escolha.', author: 'Wayne Dyer' }, { quote: 'Quando você pára de perseguir as coisas erradas, você dá as coisas certas a chance de pegar você.', author: 'Lolly Daskal' }, { quote: 'Eu não quero chegar ao fim da minha vida e descobrir que eu vivi apenas o comprimento dela. Eu quero ter vivido a largura também', author: 'Diane Ackerman' }, { quote: 'Para ser bem sucedido, você deve aceitar todos os desafios que surgem em seu caminho. Você não pode simplesmente aceitar os que você gosta.', author: 'Mike Gafka' }, { quote: 'Se você não valoriza seu tempo, nem os outros irão. Pare de doar seu tempo e talentos - comece a cobrar por isso.', author: 'Kim Garst' }, { quote: 'Sempre que você se encontra do lado da maioria, é hora de parar e refletir.', author: 'Mark Twain' }, { quote: 'A felicidade é uma borboleta que, quando perseguida, está sempre além de seu alcance, mas que, se você se sentar em silêncio, pode pousar em você.', author: 'Nathaniel Hawthorne' }, { quote: 'Eu acho que quando você tem um interesse real na vida e uma vida curiosa, esse sono não é a coisa mais importante.', author: 'Martha Stewart ' }, { quote: 'Só adie para amanhã o que você esta disposto a morrer tendo deixado desfeito.', author: 'Pablo Picasso' }, { quote: 'Tente não se tornar uma pessoa de sucesso, mas tente se tornar uma pessoa de valor. ', author: 'Albert Einstein' }, { quote: 'O primeiro passo em direção ao sucesso é dado quando você se recusa a ser prisioneiro do ambiente no qual você inicialmente se encontra.', author: 'Mark Caine' }, { quote: 'O único lugar que o sucesso vem antes do trabalho é no dicionário.', author: 'Vidal Sassoon' }, { quote: 'Se você não conceber o seu próprio plano de vida, é provável que caia no plano de outra pessoa. E adivinha o que eles planejaram para você? Não muito.', author: ' Jim Rohn' }, { quote: 'Você não pode conectar os pontos olhando para frente; você só pode conectá-los olhando para trás. Então você tem que confiar que os pontos de alguma forma se conectarão no seu futuro. Você tem que confiar em algo - seu intestino, destino, vida, karma, qualquer coisa. Essa abordagem nunca me decepcionou, e isso fez toda a diferença na minha vida.', author: 'Steve Jobs' }, { quote: 'O caminho para o sucesso e o caminho para o fracasso são quase exatamente os mesmos.', author: 'Colin R. Davis' }, { quote: 'Faça todos os dias uma coisa que o assuste.', author: 'Anonymous' }, { quote: 'As pessoas costumam dizer que a motivação não dura. Bem, nem banho - é por isso que recomendamos diariamente.', author: 'Zig Ziglar' }, { quote: 'Confie porque você está disposto a aceitar o risco, não porque é seguro ou certo.', author: 'Anonymous' }, { quote: 'Não é o que você olha que importa, é o que você vê.', author: 'Anonymous' }, { quote: 'Se você realmente quer algo, não espere - se ensine a ser impaciente.', author: 'Gurbaksh Chahal' }, { quote: 'Se você fizer o que você sempre fez, você terá o que sempre conseguiu.', author: 'Anonymous' }, { quote: 'O sucesso é a soma de pequenos esforços, repetidos dia após dia.', author: 'Robert Collier' }, { quote: 'Pessoas que conseguem ter sucesso. Quanto mais eles têm sucesso, mais eles querem ter sucesso, e mais eles encontram um caminho para ter sucesso. Da mesma forma, quando alguém está falhando, a tendência é entrar em uma espiral descendente que pode até se tornar uma profecia auto-realizável.', author: 'Tony Robbins' }, { quote: 'Pequenas mentes são domadas e subjugadas pelo infortúnio; mas grandes mentes se erguem acima dela.', author: 'Washington Irving' }, { quote: 'Não deixe o que você não pode fazer interferir com o que você pode fazer.', author: 'John R. Wooden' }, { quote: 'Sucesso não consiste em nunca cometer erros, mas em nunca fazer o mesmo pela segunda vez.', author: 'George Bernard Shaw' }, { quote: 'Todo o segredo de uma vida bem-sucedida é descobrir qual é o destino de cada um e, então, fazer.', author: 'Henry Ford' }, { quote: 'As we look ahead into the next century, leaders will be those who empower others.', author: 'Bill Gates' }, { quote: 'Motivação é o que te faz começar. Hábito é o que te mantém seguindo em frente.', author: 'Jim Ryun' }, { quote: 'Qual é o ponto de estar vivo se você não tentar fazer algo notável?.', author: 'Anonymous' }, { quote: 'Você pode ter que lutar uma batalha mais de uma vez para vencê-la', author: 'Margaret Thatcher' }, { quote: 'Um homem de sucesso é aquele que pode estabelecer uma base sólida com os tijolos que outros jogaram nele.', author: 'David Brinkley' }, { quote: 'Se você está atravessando o inferno, continue.', author: 'Winston Churchill' }, { quote: 'Se você quer alcançar a grandeza, pare de pedir permissão.', author: 'Anonymous' }, { quote: 'Apenas quando a lagarta pensava que o mundo estava acabando, ele se transformou em uma borboleta.', author: 'Proverb' }, { quote: 'A razão pela qual a maioria das pessoas nunca alcança seus objetivos é que eles não os definem, nem os consideram seriamente como críveis ou viáveis. Os vencedores podem dizer para onde estão indo, o que planejam fazer no caminho e quem compartilhará a aventura com eles.', author: 'Denis Watiley' }, { quote: 'A distância entre a insanidade e a genialidade é medida apenas pelo sucesso.', author: 'Bruce Feirstein' }, { quote: 'O ponto de partida de toda conquista é o desejo.', author: 'Napolean Hill' }, { quote: 'A maioria das coisas importantes no mundo foi realizada por pessoas que continuaram tentando quando parecia não haver ajuda.', author: 'Dale Carnegie' }, { quote: 'A falha é o tempero que dá ao sucesso o seu .', author: 'Truman Capote' }, { quote: 'O seu problema não é o problema. A sua reação é o problema.', author: 'Anonymous' }, { quote: 'Todo progresso ocorre fora da zona de conforto.', author: 'Michael John Bobak' }, { quote: 'Se você quiser fazer uma mudança permanente, pare de se concentrar no tamanho dos seus problemas e comece a focar no seu tamanho!', author: 'T. Harv Eker' }, { quote: 'Desenvolver o sucesso a partir de suas falhas. O desânimo e fracasso são dois dos degraus mais seguro para o sucesso.', author: 'Dale Carnegie' }, { quote: 'O guerreiro de sucesso é um homem médio, mas com um foco apurado como um raio laser.', author: 'Bruce Lee' }, { quote: 'A melhor razão para começar uma organização é fazer sentido; para criar um produto ou serviço para tornar o mundo um lugar melhor.', author: 'Guy Kawasaki' }, { quote: 'Inovação distingue um líder de um seguidor.', author: 'Steve Jobs' }, { quote: 'Eu descobri que quanto mais eu trabalho, mais sorte eu pareço ter', author: 'Thomas Jefferson' }, { quote: 'Sempre que você vê uma pessoa de sucesso, você só vê as glórias públicas, nunca os sacrifícios privados para alcançá-los..', author: 'Vaibhav Shah' }, { quote: 'Nós nos tornamos o que pensamos a maior parte do tempo, e esse é o segredo mais estranho.', author: 'Earl Nightingale' }];
module.exports = exports.default;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randonPhrase = undefined;

var _api = __webpack_require__(/*! ./api */ "./api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shuffleArray = function shuffleArray(arr) {
  return arr.map(function (a) {
    return [Math.random(), a];
  }).sort(function (a, b) {
    return a[0] - b[0];
  }).map(function (a) {
    return a[1];
  });
};

var filterPhrases = function filterPhrases(count) {
  return shuffleArray(_api2.default).filter(function (item, index, arr) {
    return index < count;
  });
};

var randonPhrase = exports.randonPhrase = function randonPhrase() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return filterPhrases(count);
};

/***/ })

/******/ });
});
//# sourceMappingURL=motivaai.js.map