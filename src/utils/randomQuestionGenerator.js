const qs = [
  "How was it?",
  "Did you get it?",
  "Can I see you later?",
  "Are you coming to my dad's funereal?",
  "Any thoughts on Hitler's last words?",
  "Could you explain your testicles?",
  "Should Saddam have invaded Kuweit?",
  "gonorrhea",
  "Where did the librarian touch you?",
  "Can I see you in pants?",
  "Is Baghdad a plain heaven on Earth?",
  "Any chance your dad's not engaged actually?",
  "How many meows shall there be before the stroke?",
  "Weren't you the one who interfered with my genitals?"
];

const generateQuestion = () => {
    return qs[Math.floor(Math.random() * 14)];
};

export default generateQuestion;
