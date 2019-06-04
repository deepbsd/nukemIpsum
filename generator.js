// Code that generates the random nukem ipsum text

// Create a new object called nukemIpsum by invoking the GenerateNewText constructor function
const nukemIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
        "The term \"tested in an ABM mode\" used in Article II of the Treaty refers to: (a) an ABM interceptor missile if while guided by an ABM radar it has intercepted a strategic ballistic missile or its elements in flight trajectory regardless of whether such intercept was successful or not; or if an ABM interceptor missile has been launched from an ABM launcher and guided by an ABM radar. If ABM interceptor missiles are given the capability to carry out interception without the use of ABM radars as the means of guidance, application of the term \"tested in an ABM mode\" to ABM interceptor missiles in that event shall be subject to additional discussion and agreement in the Standing Consultative Commission; (b) an ABM launcher if it has been used for launching an ABM interceptor missile; (c) an ABM radar if it has tracked a strategic ballistic missile or its elements in flight trajectory and guided an ABM interceptor missile toward them regardless of whether the intercept was successful or not; or tracked and guided an ABM interceptor missile; or tracked a strategic ballistic missile or its elements in flight trajectory in conjunction with an ABM radar, which is tracking a strategic ballistic missile or its elements in flight trajectory and guiding an ABM interceptor missile toward them or is tracking and guiding an ABM interceptor missile.",
        "EWO launch: If sequence does not start after coordinated key turn, refer to Fig 2-1 and Notify command post of type deviation, ETOR, and intent to perform TCCPS; Post ETOR to EWO documents.",
        "(For classified information on the RV, refer to the 11N series Technical Orders.)",
        "Here's my strategry on the Cold War: we win, they lose.",
        "The only thing that kept the Cold War cold was the mutual deterrance afforded by nuclear weapons.",
        "The weapons of war must be abolished before they abolish us.",
        "Ours is a world of nuclear giants and ethical infants.",
        "The safety and arming devices are acceleration-type, arming-delay devices that prevent accidental warhead detonation.",
        "The immediate fireball reaches temperatures in the ranges of tens of millions of degrees, ie, as hot as the interior temperatures of the sun.",
        "In a typical nuclear detonation, because the fireball is so hot, it immediately begins to rise in altitude.  As it rises, a vacuum effect is created under the fireball, and air that had been pushed away from the detonation rushes back toward the fireball, causing an upward flow of air and dust that follows it.",
        "The RV/G&C van is used to transport and remove/replace the RV and the MGS for the MM II weapon system.",
        "Computer components include a VAX 11/750 main computer, an Intel 80186 CPU in the buffer, and the Ethernet LAN which connects the buffer with the main computer.",
        "The Specific Force Integrating Receiver (SFIR) is one of the instruments within the IMU of the Missile G&C Set (MGCS) which measures velocity along three orthogonal axes.",
        "The SFIR incorporates a pendulous integrating gyro having a specific mass unbalance along the spin axis, and provides correction rates to the Missile Electronics Computer Assembly (MECA) which provides ouputs to the different direction control units resulting in control of the missile flight.",
        "SAC has directed that all VAFB flight test systems and the PK LSS will be compatible with the SAC ILSC requirement.",
        "The ground shock accompanying the blast is nullified in the control center by a three-level, steel, shock-isolation cage, which is supported by eight shock mounts hung from the domed roof.",
        "(Prior to MCL 3252) Fixed vapor sensing equipment consists of an oxidizer vapor detector, a fuel vapor detector, a vapor detector annunciator panel, and associated sensing devices located throughout the silo area.",
        "The LAUNCH CONTROL AND MONITOR section contains switches to lock out the system, select a target, initiate a lunch, shutdown and reset.",
        "The CMG-1 chassis contains the logic required to control launch.",
        "Attention turned to the Nike X concept, a layered system with more than one type of missile.",
        "At this point a fight broke out between the Air Force and Army over who had precedence to develop land-based ABM systems.",
        "It is such a big explosion, it can smash in buildings and knock signboards over, and break windows all over town, but if you duck and cover, like Bert [the Turtle], you will be much safer.",
        "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
        "The living will envy the dead.",
        "Frequent fear of nuclear war in adolescents seems to be an indicator for an increased risk for common mental disorders and deserves serious attention.",
        "The Peacekeeper was the first U.S. ICBM to use cold launch technology.",
        "The Protocol to the Agreement with regard to Article III, entitled the United States to have no more than 710 SLBM launchers on 44 modern ballistic missile submarines, and the USSR, no more than 950 SLBM launchers on 62 submarines.",
        "Well hell, I'd piss on a spark plug if you thought it would do any good.",
        "Do you want to play a game?",
        "Gentlemen! You can't fight in here! This is the war room!",
        "I do not avoid women, Mandrake. But I do deny them my essence.",
        "Mr. Ryan, be careful what you shoot at. Most things here don't react well to bullets.",
        "If OPERATE OK on the BVLC does not light in step 5, verify that the proper code is inserted.",
        "PEACETIME launch: If abnormal indications occur prior to step 8, report to Launch Director and proceed as directed.",
        "The missile silo (figure 1-2) is a reinforced, concrete structure with inside dimensions of approximately 146 feet in depth and 55 feet in diameter.",
        "General, you are listening to a machine.",
        "The mechanism is... Oh James, James... Will you make love to me all the time in England?",
        "I never joke about my work, 007.", 
        "Eventually Kwajalein Island was selected, as it was 4,800 miles from California, perfect for ICBMs, and already had a US Navy base with considerable housing stocks and an airstrip.",
        "From Stettin in the Baltic to Trieste in the Adriatic an iron curtain has descended across the Continent.",
        "Whether you like it or not, history is on our side. We will bury you.",
        "I like Mr. Gorbachev. We can do  business together.",
        "Mr. Gorbachev, tear down this wall!",
        "Gort! Klaatu barada nikto!",
        "It is no concern of ours how you run your own planet. But if you threaten to extend your violence, this Earth of yours will be reduced to a burned-out cinder.",
        "The remaining base in North Dakota, the Stanley R. Mickelsen Safeguard Complex, became active on 1 April 1975 and fully operational on 1 October 1975. By that time the House Appropriations Committee had already voted to deativate it. The base was shutdown on 10 February 1976."


   ];

   console.log("How many sentences? ",this.sentences.length);
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function(bunchaText) {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
        let nextSentence = this.getRandomSentence();
        // check if sentence already exists in paragraph
        if ((!paragraph.indexOf(nextSentence === -1)) || (!bunchaText.indexOf(nextSentence === -1))) {
        //if (!paragraph.indexOf(nextSentence === -1)) {
            console.log("Duplicate!");
            continue;
        } else {
            paragraph.concat(" "+nextSentence);
        }
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    let bunchaText = allParagraphs.join(" : ");
    allParagraphs.push(this.getParagraph(bunchaText));
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
        paragraphHTML += "<p>" + paragraph + "</p>";
  });
  // Only return 'Nukem ipsum ...' if numberOfParagraphs !== zero, otherwise return empty string
  let returnValue = (numberOfParagraphs) ? paragraphHTML.slice(0,3) + "Nukem ipsum dolor sit amet. " + paragraphHTML.slice(3) : "";
  return returnValue;
}

module.exports = nukemIpsum;
