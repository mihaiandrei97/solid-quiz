import Logo from '../images/quiz/logo.png';
import CssImage from '../images/quiz/css-3.png';
import JsImage from '../images/quiz/js.png';

export interface IQuiz {
    id: number;
    name: string;
    level: string;
    img: string;
    available: boolean;
    data: IQuestion[];
}

export interface IQuestion {
    id: number;
    text: string;

    answers: {
        id: string;
        text: string;
        correct: boolean;
    }[];
}

export const quizzes: IQuiz[] = [
    {
        id: 1,
        name: 'HTML',
        level: 'beginner',
        img: Logo,
        available: true,
        data: [
            {
                id: 1,
                text: 'What does HTML stand for?',
                answers: [
                    {
                        id: 'a',
                        text: 'Hyperlinks and Text Markup Language',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'Hyper Text Markup Language',
                        correct: true,
                    },
                    {
                        id: 'c',
                        text: 'Home Tool Markup Language',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'Hyperlink Markup Language',
                        correct: false,
                    },
                ],
            },
            {
                id: 2,
                text: 'Which of the following are CSS frameworks?',
                answers: [
                    { id: 'a', text: 'Vue', correct: false },
                    { id: 'b', text: 'React', correct: false },
                    { id: 'c', text: 'Tailwind CSS', correct: true },
                    { id: 'd', text: 'Angular', correct: false },
                ],
            },
            {
                id: 3,
                text: 'JavaScript is a programming language.',
                answers: [
                    { id: 'a', text: 'True', correct: true },
                    { id: 'b', text: 'False', correct: false },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'CSS',
        level: 'beginner',
        img: CssImage,
        available: true,
        data: [
            {
                id: 1,
                text: 'What does CSS stand for?',
                answers: [
                    {
                        id: 'a',
                        text: 'Cascading Style Sheets',
                        correct: true,
                    },
                    {
                        id: 'b',
                        text: 'Hyper Text Markup Language',
                        correct: false,
                    },
                    {
                        id: 'c',
                        text: 'Home Tool Markup Language',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'Hyperlink Markup Language',
                        correct: false,
                    },
                ],
            },
            {
                id: 2,
                text: 'What is the primary purpose of CSS?',
                answers: [
                    {
                        id: 'a',
                        text: 'To create responsive web pages',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To add interactivity to web pages',
                        correct: false,
                    },
                    { id: 'c', text: 'To style HTML elements', correct: true },
                    {
                        id: 'd',
                        text: 'To manage server-side operations',
                        correct: false,
                    },
                ],
            },
            {
                id: 3,
                text: 'Which of the following is NOT a valid CSS selector?',
                answers: [
                    { id: 'a', text: '#myElement', correct: false },
                    { id: 'b', text: '.myElement', correct: false },
                    { id: 'c', text: ':myElement', correct: true },
                    { id: 'd', text: 'element', correct: false },
                ],
            },
            {
                id: 4,
                text: 'What is the primary purpose of CSS?',
                answers: [
                    {
                        id: 'a',
                        text: 'To create responsive web pages',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To add interactivity to web pages',
                        correct: false,
                    },
                    { id: 'c', text: 'To style HTML elements', correct: true },
                    {
                        id: 'd',
                        text: 'To manage server-side operations',
                        correct: false,
                    },
                ],
            },
            {
                id: 5,
                text: 'Which CSS property is used to change the text color?',
                answers: [
                    { id: 'a', text: 'text-color', correct: false },
                    { id: 'b', text: 'color', correct: true },
                    { id: 'c', text: 'text-style', correct: false },
                    { id: 'd', text: 'font-color', correct: false },
                ],
            },
            {
                id: 6,
                text: 'What is the correct CSS syntax to select an element with ID "header"?',
                answers: [
                    { id: 'a', text: 'header', correct: false },
                    { id: 'b', text: '.header', correct: false },
                    { id: 'c', text: '#header', correct: true },
                    { id: 'd', text: '*header', correct: false },
                ],
            },
            {
                id: 7,
                text: 'Which CSS property is used to create spacing between HTML elements?',
                answers: [
                    { id: 'a', text: 'spacing', correct: false },
                    { id: 'b', text: 'padding', correct: true },
                    { id: 'c', text: 'margin', correct: false },
                    { id: 'd', text: 'border', correct: false },
                ],
            },
            {
                id: 8,
                text: 'In CSS, which attribute is used to control the transparency of an element?',
                answers: [
                    { id: 'a', text: 'transparency', correct: false },
                    { id: 'b', text: 'opacity', correct: true },
                    { id: 'c', text: 'visibility', correct: false },
                    { id: 'd', text: 'alpha', correct: false },
                ],
            },
            {
                id: 9,
                text: 'Which CSS property is used to create rounded corners for an element?',
                answers: [
                    { id: 'a', text: 'border-radius', correct: true },
                    { id: 'b', text: 'rounded-corners', correct: false },
                    { id: 'c', text: 'corner-radius', correct: false },
                    { id: 'd', text: 'round-edge', correct: false },
                ],
            },
            {
                id: 10,
                text: 'What is the purpose of the z-index property in CSS?',
                answers: [
                    {
                        id: 'a',
                        text: 'To set the background image',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To control the vertical position of an element',
                        correct: true,
                    },
                    { id: 'c', text: 'To set the font size', correct: false },
                    {
                        id: 'd',
                        text: 'To control the horizontal position of an element',
                        correct: false,
                    },
                ],
            },
            {
                id: 11,
                text: 'Which CSS property is used to change the font of an element?',
                answers: [
                    { id: 'a', text: 'font-family', correct: true },
                    { id: 'b', text: 'font-style', correct: false },
                    { id: 'c', text: 'font-variant', correct: false },
                    { id: 'd', text: 'font-size', correct: false },
                ],
            },
            {
                id: 12,
                text: 'What is the correct CSS syntax to select all the <p> elements inside a <div> element?',
                answers: [
                    { id: 'a', text: 'div + p', correct: false },
                    { id: 'b', text: 'div.p', correct: false },
                    { id: 'c', text: 'div p', correct: true },
                    { id: 'd', text: 'div > p', correct: false },
                ],
            },
            {
                id: 13,
                text: 'In CSS, what is the purpose of the "box-sizing" property?',
                answers: [
                    {
                        id: 'a',
                        text: 'To control the box-shadow of an element',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To set the border style of an element',
                        correct: false,
                    },
                    {
                        id: 'c',
                        text: "To specify the padding and border in an element's total width and height",
                        correct: true,
                    },
                    {
                        id: 'd',
                        text: 'To control the margin of an element',
                        correct: false,
                    },
                ],
            },
            {
                id: 14,
                text: 'Which CSS pseudo-class is used to select an element when a user hovers over it?',
                answers: [
                    { id: 'a', text: ':hover', correct: true },
                    { id: 'b', text: ':active', correct: false },
                    { id: 'c', text: ':focus', correct: false },
                    { id: 'd', text: ':visited', correct: false },
                ],
            },
            {
                id: 15,
                text: 'What does CSS specificity refer to?',
                answers: [
                    {
                        id: 'a',
                        text: 'The order in which styles are declared in the CSS file',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'The number of CSS rules applied to an element',
                        correct: false,
                    },
                    {
                        id: 'c',
                        text: 'The importance of a CSS rule',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'The priority of CSS rules based on their selectors',
                        correct: true,
                    },
                ],
            },
            {
                id: 16,
                text: 'Which CSS property is used to create shadows for elements?',
                answers: [
                    { id: 'a', text: 'box-shadow', correct: true },
                    { id: 'b', text: 'text-shadow', correct: false },
                    { id: 'c', text: 'element-shadow', correct: false },
                    { id: 'd', text: 'shadow-effect', correct: false },
                ],
            },
            {
                id: 17,
                text: 'In CSS, what does the "display: none;" property do?',
                answers: [
                    {
                        id: 'a',
                        text: 'Hides the element and leaves an empty space',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'Hides the element without affecting the layout',
                        correct: true,
                    },
                    {
                        id: 'c',
                        text: 'Creates an invisible element',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'Displays the element as a list item',
                        correct: false,
                    },
                ],
            },
            {
                id: 18,
                text: 'What is the CSS "float" property used for?',
                answers: [
                    {
                        id: 'a',
                        text: 'To move an element to the right',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To make an element "float" above other elements',
                        correct: true,
                    },
                    {
                        id: 'c',
                        text: 'To center an element horizontally',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'To set the transparency of an element',
                        correct: false,
                    },
                ],
            },
            {
                id: 19,
                text: 'Which CSS property is used to add a background color/image to an element?',
                answers: [
                    { id: 'a', text: 'background-color', correct: true },
                    { id: 'b', text: 'background-image', correct: true },
                    { id: 'c', text: 'background-style', correct: false },
                    { id: 'd', text: 'background', correct: true },
                ],
            },
            {
                id: 20,
                text: 'What is the purpose of CSS media queries?',
                answers: [
                    {
                        id: 'a',
                        text: 'To create animations and transitions',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To apply different styles based on screen size and device characteristics',
                        correct: true,
                    },
                    {
                        id: 'c',
                        text: 'To add interactivity to web pages',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'To select elements based on their type',
                        correct: false,
                    },
                ],
            },
            {
                id: 21,
                text: 'What is the CSS property used to set the spacing between lines of text?',
                answers: [
                    { id: 'a', text: 'line-height', correct: true },
                    { id: 'b', text: 'line-spacing', correct: false },
                    { id: 'c', text: 'text-spacing', correct: false },
                    { id: 'd', text: 'spacing-line', correct: false },
                ],
            },
            {
                id: 22,
                text: 'In CSS, which value is used to display an element as a block-level element?',
                answers: [
                    { id: 'a', text: 'block', correct: true },
                    { id: 'b', text: 'inline', correct: false },
                    { id: 'c', text: 'none', correct: false },
                    { id: 'd', text: 'display', correct: false },
                ],
            },
            {
                id: 23,
                text: 'Which CSS property is used to add shadows to an entire container, including its contents?',
                answers: [
                    { id: 'a', text: 'box-shadow', correct: false },
                    { id: 'b', text: 'container-shadow', correct: false },
                    { id: 'c', text: 'text-shadow', correct: false },
                    { id: 'd', text: 'box-reflect', correct: true },
                ],
            },
            {
                id: 24,
                text: 'What is the CSS property used to create a horizontal line?',
                answers: [
                    { id: 'a', text: 'line-style', correct: false },
                    { id: 'b', text: 'horizontal-line', correct: false },
                    { id: 'c', text: 'border-line', correct: false },
                    { id: 'd', text: 'border-bottom', correct: true },
                ],
            },
            {
                id: 25,
                text: 'Which CSS pseudo-class is used to select the first letter of a block of text?',
                answers: [
                    { id: 'a', text: '::first-letter', correct: true },
                    { id: 'b', text: ':first-letter', correct: false },
                    { id: 'c', text: '::first-line', correct: false },
                    { id: 'd', text: ':first-line', correct: false },
                ],
            },
            {
                id: 26,
                text: 'In CSS, which property is used to control the order of elements in the stacking context?',
                answers: [
                    { id: 'a', text: 'z-index', correct: true },
                    { id: 'b', text: 'order', correct: false },
                    { id: 'c', text: 'stacking-order', correct: false },
                    { id: 'd', text: 'layer-index', correct: false },
                ],
            },
            {
                id: 27,
                text: 'What is the CSS property used to add rounded corners to an element?',
                answers: [
                    { id: 'a', text: 'border-radius', correct: true },
                    { id: 'b', text: 'corner-radius', correct: false },
                    { id: 'c', text: 'rounded-corners', correct: false },
                    { id: 'd', text: 'corner-style', correct: false },
                ],
            },
            {
                id: 28,
                text: 'In CSS, what is the purpose of the "float" property?',
                answers: [
                    {
                        id: 'a',
                        text: 'To move an element to the right',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To make an element "float" above other elements',
                        correct: true,
                    },
                    {
                        id: 'c',
                        text: 'To center an element horizontally',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'To set the transparency of an element',
                        correct: false,
                    },
                ],
            },
            {
                id: 29,
                text: 'What does the CSS "display: inline-block;" property do?',
                answers: [
                    {
                        id: 'a',
                        text: 'Displays the element as an inline-level block container',
                        correct: true,
                    },
                    {
                        id: 'b',
                        text: 'Hides the element without affecting the layout',
                        correct: false,
                    },
                    {
                        id: 'c',
                        text: 'Creates an invisible element',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'Displays the element as a list item',
                        correct: false,
                    },
                ],
            },
            {
                id: 30,
                text: 'Which CSS property is used to add a background color/image to an element?',
                answers: [
                    { id: 'a', text: 'background-color', correct: true },
                    { id: 'b', text: 'background-image', correct: true },
                    { id: 'c', text: 'background-style', correct: false },
                    { id: 'd', text: 'background', correct: true },
                ],
            },
            {
                id: 31,
                text: 'What is the purpose of CSS media queries?',
                answers: [
                    {
                        id: 'a',
                        text: 'To create animations and transitions',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To apply different styles based on screen size and device characteristics',
                        correct: true,
                    },
                    {
                        id: 'c',
                        text: 'To add interactivity to web pages',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'To select elements based on their type',
                        correct: false,
                    },
                ],
            },
            {
                id: 32,
                text: "Which CSS property is used to control the size of an element's font?",
                answers: [
                    { id: 'a', text: 'font-family', correct: false },
                    { id: 'b', text: 'font-style', correct: false },
                    { id: 'c', text: 'font-variant', correct: false },
                    { id: 'd', text: 'font-size', correct: true },
                ],
            },
            {
                id: 33,
                text: 'In CSS, what is the purpose of the "box-sizing" property?',
                answers: [
                    {
                        id: 'a',
                        text: 'To control the box-shadow of an element',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To set the border style of an element',
                        correct: false,
                    },
                    {
                        id: 'c',
                        text: "To specify the padding and border in an element's total width and height",
                        correct: true,
                    },
                    {
                        id: 'd',
                        text: 'To control the margin of an element',
                        correct: false,
                    },
                ],
            },
            {
                id: 34,
                text: 'Which CSS pseudo-class is used to select an element when a user clicks on it?',
                answers: [
                    { id: 'a', text: ':hover', correct: false },
                    { id: 'b', text: ':active', correct: true },
                    { id: 'c', text: ':focus', correct: false },
                    { id: 'd', text: ':visited', correct: false },
                ],
            },
            {
                id: 35,
                text: 'What does CSS specificity refer to?',
                answers: [
                    {
                        id: 'a',
                        text: 'The order in which styles are declared in the CSS file',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'The number of CSS rules applied to an element',
                        correct: false,
                    },
                    {
                        id: 'c',
                        text: 'The importance of a CSS rule',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'The priority of CSS rules based on their selectors',
                        correct: true,
                    },
                ],
            },
            {
                id: 36,
                text: 'Which CSS property is used to add shadows to elements?',
                answers: [
                    { id: 'a', text: 'box-shadow', correct: true },
                    { id: 'b', text: 'text-shadow', correct: false },
                    { id: 'c', text: 'element-shadow', correct: false },
                    { id: 'd', text: 'shadow-effect', correct: false },
                ],
            },
            {
                id: 37,
                text: 'In CSS, what does the "display: none;" property do?',
                answers: [
                    {
                        id: 'a',
                        text: 'Hides the element and leaves an empty space',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'Hides the element without affecting the layout',
                        correct: true,
                    },
                    {
                        id: 'c',
                        text: 'Creates an invisible element',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'Displays the element as a list item',
                        correct: false,
                    },
                ],
            },
            {
                id: 38,
                text: 'What is the CSS "float" property used for?',
                answers: [
                    {
                        id: 'a',
                        text: 'To move an element to the right',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To make an element "float" above other elements',
                        correct: true,
                    },
                    {
                        id: 'c',
                        text: 'To center an element horizontally',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'To set the transparency of an element',
                        correct: false,
                    },
                ],
            },
            {
                id: 39,
                text: 'Which CSS property is used to add rounded corners for an element?',
                answers: [
                    { id: 'a', text: 'border-radius', correct: true },
                    { id: 'b', text: 'rounded-corners', correct: false },
                    { id: 'c', text: 'corner-radius', correct: false },
                    { id: 'd', text: 'round-edge', correct: false },
                ],
            },
            {
                id: 40,
                text: 'What is the purpose of the z-index property in CSS?',
                answers: [
                    {
                        id: 'a',
                        text: 'To set the background image',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To control the vertical position of an element',
                        correct: true,
                    },
                    { id: 'c', text: 'To set the font size', correct: false },
                    {
                        id: 'd',
                        text: 'To control the horizontal position of an element',
                        correct: false,
                    },
                ],
            },
            {
                id: 41,
                text: 'Which CSS property is used to change the font of an element?',
                answers: [
                    { id: 'a', text: 'font-family', correct: true },
                    { id: 'b', text: 'font-style', correct: false },
                    { id: 'c', text: 'font-variant', correct: false },
                    { id: 'd', text: 'font-size', correct: false },
                ],
            },
            {
                id: 42,
                text: 'What is the correct CSS syntax to select all the <p> elements inside a <div> element?',
                answers: [
                    { id: 'a', text: 'div + p', correct: false },
                    { id: 'b', text: 'div.p', correct: false },
                    { id: 'c', text: 'div p', correct: true },
                    { id: 'd', text: 'div > p', correct: false },
                ],
            },
            {
                id: 43,
                text: 'In CSS, what is the purpose of the "box-sizing" property?',
                answers: [
                    {
                        id: 'a',
                        text: 'To control the box-shadow of an element',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To set the border style of an element',
                        correct: false,
                    },
                    {
                        id: 'c',
                        text: "To specify the padding and border in an element's total width and height",
                        correct: true,
                    },
                    {
                        id: 'd',
                        text: 'To control the margin of an element',
                        correct: false,
                    },
                ],
            },
            {
                id: 44,
                text: 'Which CSS pseudo-class is used to select an element when a user hovers over it?',
                answers: [
                    { id: 'a', text: ':hover', correct: true },
                    { id: 'b', text: ':active', correct: false },
                    { id: 'c', text: ':focus', correct: false },
                    { id: 'd', text: ':visited', correct: false },
                ],
            },
            {
                id: 45,
                text: 'What does CSS specificity refer to?',
                answers: [
                    {
                        id: 'a',
                        text: 'The order in which styles are declared in the CSS file',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'The number of CSS rules applied to an element',
                        correct: false,
                    },
                    {
                        id: 'c',
                        text: 'The importance of a CSS rule',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'The priority of CSS rules based on their selectors',
                        correct: true,
                    },
                ],
            },
            {
                id: 46,
                text: 'Which CSS property is used to add shadows to elements?',
                answers: [
                    { id: 'a', text: 'box-shadow', correct: true },
                    { id: 'b', text: 'text-shadow', correct: false },
                    { id: 'c', text: 'element-shadow', correct: false },
                    { id: 'd', text: 'shadow-effect', correct: false },
                ],
            },
            {
                id: 47,
                text: 'In CSS, what does the "display: none;" property do?',
                answers: [
                    {
                        id: 'a',
                        text: 'Hides the element and leaves an empty space',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'Hides the element without affecting the layout',
                        correct: true,
                    },
                    {
                        id: 'c',
                        text: 'Creates an invisible element',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'Displays the element as a list item',
                        correct: false,
                    },
                ],
            },
            {
                id: 48,
                text: 'What is the CSS "float" property used for?',
                answers: [
                    {
                        id: 'a',
                        text: 'To move an element to the right',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To make an element "float" above other elements',
                        correct: true,
                    },
                    {
                        id: 'c',
                        text: 'To center an element horizontally',
                        correct: false,
                    },
                    {
                        id: 'd',
                        text: 'To set the transparency of an element',
                        correct: false,
                    },
                ],
            },
            {
                id: 49,
                text: 'Which CSS property is used to add rounded corners for an element?',
                answers: [
                    { id: 'a', text: 'border-radius', correct: true },
                    { id: 'b', text: 'rounded-corners', correct: false },
                    { id: 'c', text: 'corner-radius', correct: false },
                    { id: 'd', text: 'round-edge', correct: false },
                ],
            },
            {
                id: 50,
                text: 'What is the purpose of the z-index property in CSS?',
                answers: [
                    {
                        id: 'a',
                        text: 'To set the background image',
                        correct: false,
                    },
                    {
                        id: 'b',
                        text: 'To control the vertical position of an element',
                        correct: true,
                    },
                    { id: 'c', text: 'To set the font size', correct: false },
                    {
                        id: 'd',
                        text: 'To control the horizontal position of an element',
                        correct: false,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'Javascript',
        level: 'advanced',
        img: JsImage,
        available: false,
        data: [],
    },
    {
        id: 4,
        name: 'SQL',
        level: 'advanced',
        img: Logo,
        available: false,
        data: [],
    },
    {
        id: 5,
        name: 'PHP',
        level: 'advanced',
        img: Logo,
        available: false,
        data: [],
    },
];

export const getQuizzes = () => {
    return quizzes;
};

export const getQuestions = (slug: string, limit: number) =>
    quizzes
        .find((currentQuiz) => currentQuiz.name.toLowerCase() === slug)
        ?.data?.sort(() => Math.random() - 0.5)
        ?.slice(0, limit) ?? [];
