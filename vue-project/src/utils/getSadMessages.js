export function getTodaySadMessage() {
  const sadMessages = [
    "Life is just a series of goodbyes.",
    "Love often fades, leaving echoes of what once was.",
    "The stars above mock my insignificance.",
    "Time erases all traces of our existence.",
    "Dreams shattered, hope withers away.",
    "Loneliness echoes in the empty chambers of the heart.",
    "Regret lingers like a persistent shadow.",
    "Memories fade, leaving behind an ache.",
    "The laughter of yesterday is silenced by the tears of today.",
    "Promises are broken, leaving behind shattered trust.",
    "Lost in a world that doesn't notice my absence.",
    "The beauty of life is marred by the stain of pain.",
    "Longing for something just out of reach.",
    "Hearts entwined, only to be torn apart.",
    "Darkness descends, swallowing the light.",
    "The song of sorrow plays on an endless loop.",
    "Happiness slips through fingers like sand.",
    "The mirror reflects a face marked by time's passage.",
    "Hopelessness wraps its cold arms around my soul.",
    "Life's canvas painted with hues of sorrow and regret.",
  ];
  return sadMessages[Math.floor(Math.random() * sadMessages.length)]
}
