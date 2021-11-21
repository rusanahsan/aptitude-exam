/*
Maintain the format of the JSON file. Do not write 'Q1)' instead of 'Q01)'
for question numbers less than 10. Each key of JSON object has question
number in it in 'Q_)' format and each value if an array of two element. The
first element is a string containing the question and the second element is
an array containing the options related to the question.
*/
var question={"Q01)":[["text",`<p><strong>Directions (1-2): </strong>Two columns are given in each question and each column has three phrases. 
Choose the most suitable pair of phrases, which makes a grammatically correct and contextually coherent statement. 
&nbsp;</p>`],`<p><strong>COLUMN A </strong></p>
<p>A. The regulator did not wait for sufficient safety and efficacy data to be collected&nbsp;</p>
<p>B. If there is already some degree of apprehension about the safety and efficacy of COVID-19 vaccines,&nbsp;</p>
<p>C. If the answers to those questions are affirmative, then&nbsp;</p>
<p><strong>COLUMN B</strong>&nbsp;</p>
<p>D. the opaque nature of the approval process has done little to mitigate such concerns.</p>
<p>E. and did not share information about the clinical trials before granting approval.</p>
<p>F. made assumptions about increasing rates of technological progress is very reasonable </p>`,
["B-D","A-E & B-D","C-D & B-F","A-E & C-F","A-E, B-D & B-F"]],
"Q02)":[["text",`<p><strong>Directions (1-2): </strong>Two columns are given in each question and each column has three phrases. 
Choose the most suitable pair of phrases, which makes a grammatically correct and contextually coherent statement. 
&nbsp;</p>`],`<p><strong>COLUMN A </strong></p>
<p>A. These regulatory bodies and committees have remained silent&nbsp;</p>
<p>B. More than being a scientific methodology,&nbsp;</p>
<p>C. The coercive attempt to falsify a study participant&rsquo;s claims and intimidate him or her&nbsp;</p>
<p><strong>COLUMN B </strong></p>
<p>D. violates the agreed upon rules of clinical trials&nbsp;</p>
<p>E. clinical trials are a method of human cooperation&nbsp;</p>
<p>F. the impression that they are not independent </p>`,
["B-D","A-E & B-D","C-D & B-F","A-E & C-F","B-E & C-D"]],
"Q03)":[["text",`<p><strong>Directions (3-6): In each of the questions given below a sentence is given in which a word is highlighted. 
Each sentence is then followed by three words. Choose the word(s) that can replace the given word in bold to make a grammatically
 and contextually meaningful sentence as your answer. If none of the words can replace the highlighted word then choose &ldquo;
 None can replace&rdquo; as the correct choice. &nbsp;</strong></p>`],`<p>There is a vending machine on the platform that <strong>dispenses</strong> snacks.&nbsp;</p>
 <p>(i) Disburses (ii) Squander (iii) Distributes &nbsp;</p>`,
 ["Only (i)","Both (i) &(iii)","None can replace","Only (ii)","Only (iii)"]],
"Q04)":[["text",`<p><strong>Directions (3-6): In each of the questions given below a sentence is given in which a word is highlighted. 
 Each sentence is then followed by three words. Choose the word(s) that can replace the given word in bold to make a grammatically
  and contextually meaningful sentence as your answer. If none of the words can replace the highlighted word then choose &ldquo;
  None can replace&rdquo; as the correct choice. &nbsp;</strong></p>`],`<p>India and Japan have devised a <strong>mechanism</strong> for cooperation in the steel industry at the joint secretary level.&nbsp;</p><p>(i) System (ii) Method (iii) tools &nbsp;</p>`,
  ["Only (i)","Both (i) &(iii)","Both (i) &(ii)","Only (ii)","None can replace"]],
"Q05)":[["text",`<p><strong>Directions (3-6): In each of the questions given below a sentence is given in which a word is highlighted. 
  Each sentence is then followed by three words. Choose the word(s) that can replace the given word in bold to make a grammatically
   and contextually meaningful sentence as your answer. If none of the words can replace the highlighted word then choose &ldquo;
   None can replace&rdquo; as the correct choice. &nbsp;</strong></p>`],`<p>Your business premises which <strong>qualify</strong> for business asset taper relief have become too cramped.&nbsp;</p>
   <p>(i) Hamper (ii) Measured (iii) Inclined &nbsp;</p>`,
   ["None can replace","Both (i) &(iii)","Both (i) &(ii)","Only (ii)","Only (iii)"]],
"Q06)":[["text",`<p><strong>Directions (3-6): In each of the questions given below a sentence is given in which a word is highlighted. 
   Each sentence is then followed by three words. Choose the word(s) that can replace the given word in bold to make a grammatically
    and contextually meaningful sentence as your answer. If none of the words can replace the highlighted word then choose &ldquo;
    None can replace&rdquo; as the correct choice. &nbsp;</strong></p>`],`<p>The misuse of the Governor&rsquo;s office to undermine duly elected State governments is a particularly mischievous <strong>disruption</strong> of federalism.&nbsp;</p>
    <p>(i) Disturbance (ii) Obstruction (iii) Relevant </p>`,
    ["None can replace","Both (i) &(iii)","Both (i) &(ii)","Only (ii)","Only (iii)"]],
"Q07)":[["text",`<p><strong>Directions (7-9): In each of the following sentences, parts of the sentence are left blank. Beneath each sentence, five different ways of completing the sentence are indicated. Choose the best alternative among the given options.</strong> </p>`],
`<p>Police _______ Notorious Gangster after relentless chase that _________ for 3 weeks. &nbsp;</p>`,
["Arrest, reigned","Nabbed, lasted","Snatched, persist","Contempt, endured","Apprehend, sustain"]],
"Q08)":[["text",`<p><strong>Directions (7-9): In each of the following sentences, parts of the sentence are left blank. Beneath each sentence, five different ways of completing the sentence are indicated. Choose the best alternative among the given options.</strong> </p>`],
`<p>Tropical rain forests choked in fog and continuously ________ by mists and down pours are least _______ by fires. </p>`,
["Rejuvenate, impact","Exhausted, Overwhelm","Drenched, affected","Approach, Influence","Devoured, swayed"]],
"Q09)":[["text",`<p><strong>Directions (7-9): In each of the following sentences, parts of the sentence are left blank. Beneath each sentence, five different ways of completing the sentence are indicated. Choose the best alternative among the given options.</strong> </p>`],
`<p>An interview is a good chance to _________ how candidates _________ difficult situations &nbsp;</p>`,
["Discuss, improved","Assess, addressed","Analyze, tackling","Evaluate, approach","understand, enhance"]],
"Q10)":[["text",`<p><strong>Directions (10-12): Improve the bold part in the following sentences, if needed.</strong> </p>`],
`<p>He made himself master of practically every branch of medieval learning, and <strong>has a thoroughly knowledge of</strong> the sources and the bibliography of his subject &nbsp;</p>`,
["having a thorough knowledge of","has had a thorough knowledge to","Have a thoroughly knowledge for"," had a thorough knowledge of","No Correction required"]],
"Q11)":[["text",`<p><strong>Directions (10-12): Improve the bold part in the following sentences, if needed.</strong> </p>`],
`<p>Gionee <strong>has been found guilty for</strong> intentionally inflicting malware in over 20 million phones by a Chinese court.</p>`,
["had been found guilty for","has been found guilty of","has been found being guilty with","have found to guilty for","No Correction required"]],
"Q12)":[["text",`<p><strong>Directions (10-12): Improve the bold part in the following sentences, if needed.</strong> </p>`],
`<p>Many people believe that voluntary bodies as they are today should <strong>not entrusted with</strong> this national responsibility. &nbsp;</p>`,
["be entrust not with","not be entrust with","not being entrusted for","not be entrusted with","No Correction required"]],
"Q13)":[["text",`<p><strong>Directions (13-14): In each of the questions given below, four words have been highlighted which may or may not be at their correct positions. Pick the most suitable option to interchange the words, so that the statement becomes grammatically correct and contextually meaningful. &nbsp; </strong></p>`],
`<p>The MNM&rsquo;s promise to directly pay women a monthly amount may be <strong>competitive (A)</strong> as a <strong>landscape (B)</strong> to grab attention in an over-crowded, highly <strong>viewed (C)</strong> electoral<strong> strategy (D)</strong>. <strong>&nbsp;</strong></p>`,
["CDAB","No rearrangement required","BDCA","ADCB","CABD"]],
"Q14)":[["text",`<p><strong>Directions (13-14): In each of the questions given below, four words have been highlighted which may or may not be at their correct positions. Pick the most suitable option to interchange the words, so that the statement becomes grammatically correct and contextually meaningful. &nbsp; </strong></p>`],
`<p>With the Indian economy gradually <strong>debating (A)</strong> its feet after a historic contraction, economic commentators have <strong>finding (B)</strong> themselves with <strong>viability(C)</strong> the need for fiscal expansion and the <strong>busied (D)</strong> of a &ldquo;V-shaped recovery&rdquo;. &nbsp;<strong>&nbsp;</strong></p>`,
["CADB","ABDC","No rearrangement required","BDAC","DBAC"]],
"Q15)":[["text",`<p><strong>Directions (15-21): Read the following passage carefully and answer the questions given below it. Certain words have been printed in bold to help you locate them, while answering some of the questions.</strong></p>
<p>In some ways we already do: every time we spend our cash we are making an active choice about the companies we support and the practices we <strong>endorse</strong>. Today, when corporations can be more influential than entire states, where we put our pounds is where the power lies. The problem is, so it is difficult to confidently make an informed choice. Consider this: the retail manufacturing industry is the second most polluting industry on earth, second only to oil. According to Annie Leonard, an expert in overconsumption, only 1% of the materials used to produce our consumer goods are still in use six months after sale. Somewhere, the value of craftsmanship and of provenance has been lost. Price and speed are trumping value. However, the tide is turning. Increasing awareness around these issues has led to a rise in what is known as conscious consumption, a movement of people who seek out ways to make positive decisions about what to buy and look for a solution to the negative impact consumerism is having on our world.</p>
<p>This is a growing tribe: a third of UK consumers claim to be very concerned about issues regarding the origin of products. A study from YouGov and the Global Poverty Project revealed that 74% of those surveyed would pay an extra 5% for their clothes if there was a guarantee workers were being paid fairly and working in safe conditions. If you&rsquo;re thinking that 5% doesn&rsquo;t sound like a lot, consider the fact that the fashion industry could take a <strong>staggering</strong> 125 million people out of poverty by adding only 1% of its profits to workers&rsquo; wages. Issues such as equal pay, environmentally conscious manufacturing processes, prevention of counterfeit goods, human trafficking, responsible farming practices and overproduction of goods are all at the forefront of consumers&rsquo; minds when making these choices. In an increasingly open, digital world where authenticity is the buzzword of choice, businesses must keep up with growing demands for ethical behaviour and transparency in everything from employee rights and gender discrimination to the supply chain. In studying for my PhD, I researched product supply chain transparency in depth, looking at technologies to improve information about products and the global network of people and resources that fuel them. I believe technology is the key to dealing with the challenges created by consumerism. Open data, social networks and mobile tech can change the game. Groundbreaking technologies could enable transparency in supply chains, which is why this year I have<strong>&nbsp;__(I)___</strong>on turning my findings into a social enterprise to empower businesses to take steps to being open. &nbsp;</p>`],
`Why businesses must keep up with growing demands of ethical behaviour and transparency?`,
["As the world of business can be opaque and supply chains are murky","As the value of craftsmanship and of provenance has been lost","As they want to tackle the huge impact our current production levels having on the world","As Customers are taking an increasing interest in the ethical practices of those from whom they buy"," None of these"]],
"Q16)":[["text",`<p><strong>Directions (15-21): Read the following passage carefully and answer the questions given below it. Certain words have been printed in bold to help you locate them, while answering some of the questions.</strong></p>
<p>In some ways we already do: every time we spend our cash we are making an active choice about the companies we support and the practices we <strong>endorse</strong>. Today, when corporations can be more influential than entire states, where we put our pounds is where the power lies. The problem is, so it is difficult to confidently make an informed choice. Consider this: the retail manufacturing industry is the second most polluting industry on earth, second only to oil. According to Annie Leonard, an expert in overconsumption, only 1% of the materials used to produce our consumer goods are still in use six months after sale. Somewhere, the value of craftsmanship and of provenance has been lost. Price and speed are trumping value. However, the tide is turning. Increasing awareness around these issues has led to a rise in what is known as conscious consumption, a movement of people who seek out ways to make positive decisions about what to buy and look for a solution to the negative impact consumerism is having on our world.</p>
<p>This is a growing tribe: a third of UK consumers claim to be very concerned about issues regarding the origin of products. A study from YouGov and the Global Poverty Project revealed that 74% of those surveyed would pay an extra 5% for their clothes if there was a guarantee workers were being paid fairly and working in safe conditions. If you&rsquo;re thinking that 5% doesn&rsquo;t sound like a lot, consider the fact that the fashion industry could take a <strong>staggering</strong> 125 million people out of poverty by adding only 1% of its profits to workers&rsquo; wages. Issues such as equal pay, environmentally conscious manufacturing processes, prevention of counterfeit goods, human trafficking, responsible farming practices and overproduction of goods are all at the forefront of consumers&rsquo; minds when making these choices. In an increasingly open, digital world where authenticity is the buzzword of choice, businesses must keep up with growing demands for ethical behaviour and transparency in everything from employee rights and gender discrimination to the supply chain. In studying for my PhD, I researched product supply chain transparency in depth, looking at technologies to improve information about products and the global network of people and resources that fuel them. I believe technology is the key to dealing with the challenges created by consumerism. Open data, social networks and mobile tech can change the game. Groundbreaking technologies could enable transparency in supply chains, which is why this year I have<strong>&nbsp;__(I)___</strong>on turning my findings into a social enterprise to empower businesses to take steps to being open. &nbsp;</p>`],
`<p>Which of the following statement(s) is/are corroborating the statement made by the author that &ldquo;the tide is turning&rdquo;?</p>
<p>(i) 74% of those surveyed would pay an extra 5% for their clothes if there was a guarantee that workers were paid fairly</p>
<p>(ii) Awareness about environmentally conscious manufacturing processes among customers while making their choices is increasing.</p>
<p>(iii) Every time we spend our cash, we are making an active choice about the companies we support and the practices we endorse.</p>`,
["Both (i) & (ii)","Both (i) & (iii)","Only (iii)","Only (i)","None of these"]],
"Q17)":[["text",`<p><strong>Directions (15-21): Read the following passage carefully and answer the questions given below it. Certain words have been printed in bold to help you locate them, while answering some of the questions.</strong></p>
<p>In some ways we already do: every time we spend our cash we are making an active choice about the companies we support and the practices we <strong>endorse</strong>. Today, when corporations can be more influential than entire states, where we put our pounds is where the power lies. The problem is, so it is difficult to confidently make an informed choice. Consider this: the retail manufacturing industry is the second most polluting industry on earth, second only to oil. According to Annie Leonard, an expert in overconsumption, only 1% of the materials used to produce our consumer goods are still in use six months after sale. Somewhere, the value of craftsmanship and of provenance has been lost. Price and speed are trumping value. However, the tide is turning. Increasing awareness around these issues has led to a rise in what is known as conscious consumption, a movement of people who seek out ways to make positive decisions about what to buy and look for a solution to the negative impact consumerism is having on our world.</p>
<p>This is a growing tribe: a third of UK consumers claim to be very concerned about issues regarding the origin of products. A study from YouGov and the Global Poverty Project revealed that 74% of those surveyed would pay an extra 5% for their clothes if there was a guarantee workers were being paid fairly and working in safe conditions. If you&rsquo;re thinking that 5% doesn&rsquo;t sound like a lot, consider the fact that the fashion industry could take a <strong>staggering</strong> 125 million people out of poverty by adding only 1% of its profits to workers&rsquo; wages. Issues such as equal pay, environmentally conscious manufacturing processes, prevention of counterfeit goods, human trafficking, responsible farming practices and overproduction of goods are all at the forefront of consumers&rsquo; minds when making these choices. In an increasingly open, digital world where authenticity is the buzzword of choice, businesses must keep up with growing demands for ethical behaviour and transparency in everything from employee rights and gender discrimination to the supply chain. In studying for my PhD, I researched product supply chain transparency in depth, looking at technologies to improve information about products and the global network of people and resources that fuel them. I believe technology is the key to dealing with the challenges created by consumerism. Open data, social networks and mobile tech can change the game. Groundbreaking technologies could enable transparency in supply chains, which is why this year I have<strong>&nbsp;__(I)___</strong>on turning my findings into a social enterprise to empower businesses to take steps to being open. &nbsp;</p>`],
`<p>Which of the following statement is true in context of the passage?</p>`,
["The biggest problem with consumerism is the fact that people do not realize that there is a problem.","Difficulty in making an informed choice is increasingly important for the conscious consumer.","We are currently consuming resources at an unsustainable rate, which is causing mass environmental","truction and social problems across the world.","Conscious consumption can help in taking significant number of people out of poverty.","None of these"]],
"Q18)":[["text",`<p><strong>Directions (15-21): Read the following passage carefully and answer the questions given below it. Certain words have been printed in bold to help you locate them, while answering some of the questions.</strong></p>
<p>In some ways we already do: every time we spend our cash we are making an active choice about the companies we support and the practices we <strong>endorse</strong>. Today, when corporations can be more influential than entire states, where we put our pounds is where the power lies. The problem is, so it is difficult to confidently make an informed choice. Consider this: the retail manufacturing industry is the second most polluting industry on earth, second only to oil. According to Annie Leonard, an expert in overconsumption, only 1% of the materials used to produce our consumer goods are still in use six months after sale. Somewhere, the value of craftsmanship and of provenance has been lost. Price and speed are trumping value. However, the tide is turning. Increasing awareness around these issues has led to a rise in what is known as conscious consumption, a movement of people who seek out ways to make positive decisions about what to buy and look for a solution to the negative impact consumerism is having on our world.</p>
<p>This is a growing tribe: a third of UK consumers claim to be very concerned about issues regarding the origin of products. A study from YouGov and the Global Poverty Project revealed that 74% of those surveyed would pay an extra 5% for their clothes if there was a guarantee workers were being paid fairly and working in safe conditions. If you&rsquo;re thinking that 5% doesn&rsquo;t sound like a lot, consider the fact that the fashion industry could take a <strong>staggering</strong> 125 million people out of poverty by adding only 1% of its profits to workers&rsquo; wages. Issues such as equal pay, environmentally conscious manufacturing processes, prevention of counterfeit goods, human trafficking, responsible farming practices and overproduction of goods are all at the forefront of consumers&rsquo; minds when making these choices. In an increasingly open, digital world where authenticity is the buzzword of choice, businesses must keep up with growing demands for ethical behaviour and transparency in everything from employee rights and gender discrimination to the supply chain. In studying for my PhD, I researched product supply chain transparency in depth, looking at technologies to improve information about products and the global network of people and resources that fuel them. I believe technology is the key to dealing with the challenges created by consumerism. Open data, social networks and mobile tech can change the game. Groundbreaking technologies could enable transparency in supply chains, which is why this year I have<strong>&nbsp;__(I)___</strong>on turning my findings into a social enterprise to empower businesses to take steps to being open. &nbsp;</p>`],
`<p>According to the author how can we tackle the impact of consumerism? </p>`,
["By using technology in order to increase transparency in supply chains","By repleting the resources which were otherwise depleted due to overconsumption","By increasing the lifespan of the products so as to reduce the consumption.","By spending extra for the products if there was a guarantee worker were being paid fairly","None of these"]],
"Q19)":[["text",`<p><strong>Directions (15-21): Read the following passage carefully and answer the questions given below it. Certain words have been printed in bold to help you locate them, while answering some of the questions.</strong></p>
<p>In some ways we already do: every time we spend our cash we are making an active choice about the companies we support and the practices we <strong>endorse</strong>. Today, when corporations can be more influential than entire states, where we put our pounds is where the power lies. The problem is, so it is difficult to confidently make an informed choice. Consider this: the retail manufacturing industry is the second most polluting industry on earth, second only to oil. According to Annie Leonard, an expert in overconsumption, only 1% of the materials used to produce our consumer goods are still in use six months after sale. Somewhere, the value of craftsmanship and of provenance has been lost. Price and speed are trumping value. However, the tide is turning. Increasing awareness around these issues has led to a rise in what is known as conscious consumption, a movement of people who seek out ways to make positive decisions about what to buy and look for a solution to the negative impact consumerism is having on our world.</p>
<p>This is a growing tribe: a third of UK consumers claim to be very concerned about issues regarding the origin of products. A study from YouGov and the Global Poverty Project revealed that 74% of those surveyed would pay an extra 5% for their clothes if there was a guarantee workers were being paid fairly and working in safe conditions. If you&rsquo;re thinking that 5% doesn&rsquo;t sound like a lot, consider the fact that the fashion industry could take a <strong>staggering</strong> 125 million people out of poverty by adding only 1% of its profits to workers&rsquo; wages. Issues such as equal pay, environmentally conscious manufacturing processes, prevention of counterfeit goods, human trafficking, responsible farming practices and overproduction of goods are all at the forefront of consumers&rsquo; minds when making these choices. In an increasingly open, digital world where authenticity is the buzzword of choice, businesses must keep up with growing demands for ethical behaviour and transparency in everything from employee rights and gender discrimination to the supply chain. In studying for my PhD, I researched product supply chain transparency in depth, looking at technologies to improve information about products and the global network of people and resources that fuel them. I believe technology is the key to dealing with the challenges created by consumerism. Open data, social networks and mobile tech can change the game. Groundbreaking technologies could enable transparency in supply chains, which is why this year I have<strong>&nbsp;__(I)___</strong>on turning my findings into a social enterprise to empower businesses to take steps to being open. &nbsp;</p>`],
`<p>Which of the following word is most <strong>similar</strong> in meaning to the word <strong>&ldquo;endorse&rdquo;</strong> as given in the passage? &nbsp;</p>`,
["Sabotage","Promote","Veto","Deliberate","Censure"]],
"Q20)":[["text",`<p><strong>Directions (15-21): Read the following passage carefully and answer the questions given below it. Certain words have been printed in bold to help you locate them, while answering some of the questions.</strong></p>
<p>In some ways we already do: every time we spend our cash we are making an active choice about the companies we support and the practices we <strong>endorse</strong>. Today, when corporations can be more influential than entire states, where we put our pounds is where the power lies. The problem is, so it is difficult to confidently make an informed choice. Consider this: the retail manufacturing industry is the second most polluting industry on earth, second only to oil. According to Annie Leonard, an expert in overconsumption, only 1% of the materials used to produce our consumer goods are still in use six months after sale. Somewhere, the value of craftsmanship and of provenance has been lost. Price and speed are trumping value. However, the tide is turning. Increasing awareness around these issues has led to a rise in what is known as conscious consumption, a movement of people who seek out ways to make positive decisions about what to buy and look for a solution to the negative impact consumerism is having on our world.</p>
<p>This is a growing tribe: a third of UK consumers claim to be very concerned about issues regarding the origin of products. A study from YouGov and the Global Poverty Project revealed that 74% of those surveyed would pay an extra 5% for their clothes if there was a guarantee workers were being paid fairly and working in safe conditions. If you&rsquo;re thinking that 5% doesn&rsquo;t sound like a lot, consider the fact that the fashion industry could take a <strong>staggering</strong> 125 million people out of poverty by adding only 1% of its profits to workers&rsquo; wages. Issues such as equal pay, environmentally conscious manufacturing processes, prevention of counterfeit goods, human trafficking, responsible farming practices and overproduction of goods are all at the forefront of consumers&rsquo; minds when making these choices. In an increasingly open, digital world where authenticity is the buzzword of choice, businesses must keep up with growing demands for ethical behaviour and transparency in everything from employee rights and gender discrimination to the supply chain. In studying for my PhD, I researched product supply chain transparency in depth, looking at technologies to improve information about products and the global network of people and resources that fuel them. I believe technology is the key to dealing with the challenges created by consumerism. Open data, social networks and mobile tech can change the game. Groundbreaking technologies could enable transparency in supply chains, which is why this year I have<strong>&nbsp;__(I)___</strong>on turning my findings into a social enterprise to empower businesses to take steps to being open. &nbsp;</p>`],
`<p>Which of the following word is most <strong>similar</strong> in meaning to the word <strong>&ldquo;staggering&rdquo;</strong> as given in the passage? </p>`,
["Enfeebling","Common","Mundane","Draining","Confound"]],
"Q21)":[["text",`<p><strong>Directions (15-21): Read the following passage carefully and answer the questions given below it. Certain words have been printed in bold to help you locate them, while answering some of the questions.</strong></p>
<p>In some ways we already do: every time we spend our cash we are making an active choice about the companies we support and the practices we <strong>endorse</strong>. Today, when corporations can be more influential than entire states, where we put our pounds is where the power lies. The problem is, so it is difficult to confidently make an informed choice. Consider this: the retail manufacturing industry is the second most polluting industry on earth, second only to oil. According to Annie Leonard, an expert in overconsumption, only 1% of the materials used to produce our consumer goods are still in use six months after sale. Somewhere, the value of craftsmanship and of provenance has been lost. Price and speed are trumping value. However, the tide is turning. Increasing awareness around these issues has led to a rise in what is known as conscious consumption, a movement of people who seek out ways to make positive decisions about what to buy and look for a solution to the negative impact consumerism is having on our world.</p>
<p>This is a growing tribe: a third of UK consumers claim to be very concerned about issues regarding the origin of products. A study from YouGov and the Global Poverty Project revealed that 74% of those surveyed would pay an extra 5% for their clothes if there was a guarantee workers were being paid fairly and working in safe conditions. If you&rsquo;re thinking that 5% doesn&rsquo;t sound like a lot, consider the fact that the fashion industry could take a <strong>staggering</strong> 125 million people out of poverty by adding only 1% of its profits to workers&rsquo; wages. Issues such as equal pay, environmentally conscious manufacturing processes, prevention of counterfeit goods, human trafficking, responsible farming practices and overproduction of goods are all at the forefront of consumers&rsquo; minds when making these choices. In an increasingly open, digital world where authenticity is the buzzword of choice, businesses must keep up with growing demands for ethical behaviour and transparency in everything from employee rights and gender discrimination to the supply chain. In studying for my PhD, I researched product supply chain transparency in depth, looking at technologies to improve information about products and the global network of people and resources that fuel them. I believe technology is the key to dealing with the challenges created by consumerism. Open data, social networks and mobile tech can change the game. Groundbreaking technologies could enable transparency in supply chains, which is why this year I have<strong>&nbsp;__(I)___</strong>on turning my findings into a social enterprise to empower businesses to take steps to being open. &nbsp;</p>`],
`<p>Choose the most suitable word/phrase to fill the given blank (I). &nbsp;</p>`,
["Persist","Sustaining","Ceased","Resist","Embarked"]],
"Q22)":[["text",`<p><strong>Directions (22-26): Rearrange the following six sentences (A), (B), (C), (D), (E) and (F) in the proper sequence to form a meaningful paragraph and then answer the questions given below.</strong></p>
<p>A. This is partly linked to drop in payment rates, as consumers are struggling to pay their bills amid rising consumption and tight finances.</p>
<p>B. Embracing energy efficiency can be a win-win solution as this can bring down household energy bills and reduce discoms&rsquo; financial stress</p>
<p>C. The Indian government has sanctioned liquidity relief to help discoms tide over this crisis, but these are just short-term fixes.</p>
<p>D. The rules lay down uniform performance standards for power distribution companies (discoms) and make them liable to compensate consumers in case of violations.</p>
<p>E. The well-intentioned rules come at a time when Indian discoms are struggling to manage their finances.</p>
<p>F. The Power Minister, R.K. Singh, recently announced the Electricity (Rights of Consumers) Rules, 2020.</p>`],
`<p>What should be the FOURTH sentence after rearrangement?</p>`,
["F","A","B","C","D"]],
"Q23)":[["text",`<p><strong>Directions (22-26): Rearrange the following six sentences (A), (B), (C), (D), (E) and (F) in the proper sequence to form a meaningful paragraph and then answer the questions given below.</strong></p>
<p>A. This is partly linked to drop in payment rates, as consumers are struggling to pay their bills amid rising consumption and tight finances.</p>
<p>B. Embracing energy efficiency can be a win-win solution as this can bring down household energy bills and reduce discoms&rsquo; financial stress</p>
<p>C. The Indian government has sanctioned liquidity relief to help discoms tide over this crisis, but these are just short-term fixes.</p>
<p>D. The rules lay down uniform performance standards for power distribution companies (discoms) and make them liable to compensate consumers in case of violations.</p>
<p>E. The well-intentioned rules come at a time when Indian discoms are struggling to manage their finances.</p>
<p>F. The Power Minister, R.K. Singh, recently announced the Electricity (Rights of Consumers) Rules, 2020.</p>`],
`<p>What should be the THIRD sentence after rearrangement?</p>`,
["E","C","A","B","F"]],
"Q24)":[["text",`<p><strong>Directions (22-26): Rearrange the following six sentences (A), (B), (C), (D), (E) and (F) in the proper sequence to form a meaningful paragraph and then answer the questions given below.</strong></p>
<p>A. This is partly linked to drop in payment rates, as consumers are struggling to pay their bills amid rising consumption and tight finances.</p>
<p>B. Embracing energy efficiency can be a win-win solution as this can bring down household energy bills and reduce discoms&rsquo; financial stress</p>
<p>C. The Indian government has sanctioned liquidity relief to help discoms tide over this crisis, but these are just short-term fixes.</p>
<p>D. The rules lay down uniform performance standards for power distribution companies (discoms) and make them liable to compensate consumers in case of violations.</p>
<p>E. The well-intentioned rules come at a time when Indian discoms are struggling to manage their finances.</p>
<p>F. The Power Minister, R.K. Singh, recently announced the Electricity (Rights of Consumers) Rules, 2020.</p>`],
`<p>What should be the LAST sentence after rearrangement?</p>`,
["F","C","B","A","D"]],
"Q25)":[["text",`<p><strong>Directions (22-26): Rearrange the following six sentences (A), (B), (C), (D), (E) and (F) in the proper sequence to form a meaningful paragraph and then answer the questions given below.</strong></p>
<p>A. This is partly linked to drop in payment rates, as consumers are struggling to pay their bills amid rising consumption and tight finances.</p>
<p>B. Embracing energy efficiency can be a win-win solution as this can bring down household energy bills and reduce discoms&rsquo; financial stress</p>
<p>C. The Indian government has sanctioned liquidity relief to help discoms tide over this crisis, but these are just short-term fixes.</p>
<p>D. The rules lay down uniform performance standards for power distribution companies (discoms) and make them liable to compensate consumers in case of violations.</p>
<p>E. The well-intentioned rules come at a time when Indian discoms are struggling to manage their finances.</p>
<p>F. The Power Minister, R.K. Singh, recently announced the Electricity (Rights of Consumers) Rules, 2020.</p>`],
`<p>What should be the SECOND sentence after rearrangement?</p>`,
["F","B","C","D","E"]],
"Q26)":[["text",`<p><strong>Directions (22-26): Rearrange the following six sentences (A), (B), (C), (D), (E) and (F) in the proper sequence to form a meaningful paragraph and then answer the questions given below.</strong></p>
<p>A. This is partly linked to drop in payment rates, as consumers are struggling to pay their bills amid rising consumption and tight finances.</p>
<p>B. Embracing energy efficiency can be a win-win solution as this can bring down household energy bills and reduce discoms&rsquo; financial stress</p>
<p>C. The Indian government has sanctioned liquidity relief to help discoms tide over this crisis, but these are just short-term fixes.</p>
<p>D. The rules lay down uniform performance standards for power distribution companies (discoms) and make them liable to compensate consumers in case of violations.</p>
<p>E. The well-intentioned rules come at a time when Indian discoms are struggling to manage their finances.</p>
<p>F. The Power Minister, R.K. Singh, recently announced the Electricity (Rights of Consumers) Rules, 2020.</p>`],
`<p>What should be the FIRST sentence after rearrangement?</p>`,
["F","D","E","B","C"]],
"Q27)":[["text",`<p><strong>Directions (27-30): In each of the following questions, four sentences are given and you have to choose the one which has some or any grammatical error in it. If all the given four sentences are correct choose option (e) as your choice.</strong></p>`],
``,
["The government acknowledged that the Form 27 format was problematic and provided an undertaking","the court to effect appropriate amendments.","Opacity in communication is dangerous when there is high vaccine hesitancy","Hong Kong should no sooner erase its colonial past the Beijing should demolish the Forbidden City","We need to improve the availability and affordability of energy-efficient appliances.","All are correct"]],
"Q28)":[["text",`<p><strong>Directions (27-30): In each of the following questions, four sentences are given and you have to choose the one which has some or any grammatical error in it. If all the given four sentences are correct choose option (e) as your choice.</strong></p>`],
``,
["The growth conundrum that Kantibhai and Sureshbhai plan to solve is perhaps the same which a","ority of MSME owners in the country face.","India needs a nationwide consumer awareness campaign on energy efficiency.","Record GST inflows in December augur well, but the economy is still in a flux","The country requires a new political instrument for governability","All are correct"]],
"Q29)":[["text",`<p><strong>Directions (27-30): In each of the following questions, four sentences are given and you have to choose the one which has some or any grammatical error in it. If all the given four sentences are correct choose option (e) as your choice.</strong></p>`],
``,
["The government has significantly weakened the critical duty imposed by the law on patentees/licensees to disclose patent working information","Too much of strong leadership has robbed India of its democratic exuberance and constitutional dynamism.","Core sectors recorded yet another contraction in November, with cement and steel slipping back after a minor uptick.","Many of his pieces have designs incised or in relief, and others are skilful decorated with gold and silver","All are correct"]],
"Q30)":[["text",`<p><strong>Directions (27-30): In each of the following questions, four sentences are given and you have to choose the one which has some or any grammatical error in it. If all the given four sentences are correct choose option (e) as your choice.</strong></p>`],
``,
["The gender gap in the agriculture sector will only widen more with the current farm laws","Journalism focuses on a narrative of gloom that forces many people to avoid news altogether.","Journalism creates a better-informed citizenry, which in turn creates a better collective future","There will possibly be a unanimous rejection of the Republican objections to Joe Biden’s electoral votes","All are correct"]],
"Q31)":[["text&image",`<p><strong>Direction (31 &ndash; 35):</strong> Given bar graph shows percentage distribution of total CD&rsquo;s ordered by four shopkeeper (A, B, C &amp; D) and percentage of CD&rsquo;s sold by these four shopkeepers out of total CD&rsquo;s ordered by each. Read the data carefully and answer the questions.</p>`,`./imgq31.jpg`],
`<p>Total unsold CD&rsquo;s by A &amp; D together are how much more than total sold CD&rsquo;s by C?</p>`,
["126","132","128","116","118"]],
"Q32)":[["text&image",`<p><strong>Direction (31 &ndash; 35):</strong> Given bar graph shows percentage distribution of total CD&rsquo;s ordered by four shopkeeper (A, B, C &amp; D) and percentage of CD&rsquo;s sold by these four shopkeepers out of total CD&rsquo;s ordered by each. Read the data carefully and answer the questions.</p>`,`./imgq31.jpg`],
`<p>If total CD&rsquo;s sold by shopkeeper E are 125% more than total CD&rsquo;s sold by B and shopkeeper E sold 27% of total ordered CD&rsquo;s, then find total CD&rsquo;s ordered by E are what percent more than total CD&rsquo;S ordered by C ?</p>`,
["36%","15%","30%","20%","25%"]],
"Q33)":[["text&image",`<p><strong>Direction (31 &ndash; 35):</strong> Given bar graph shows percentage distribution of total CD&rsquo;s ordered by four shopkeeper (A, B, C &amp; D) and percentage of CD&rsquo;s sold by these four shopkeepers out of total CD&rsquo;s ordered by each. Read the data carefully and answer the questions.</p>`,`./imgq31.jpg`],
`Find average number of unsold CD’s by B, C & D?`,
["120","100","80","110","72"]],
"Q34)":[["text&image",`<p><strong>Direction (31 &ndash; 35):</strong> Given bar graph shows percentage distribution of total CD&rsquo;s ordered by four shopkeeper (A, B, C &amp; D) and percentage of CD&rsquo;s sold by these four shopkeepers out of total CD&rsquo;s ordered by each. Read the data carefully and answer the questions.</p>`,`./imgq31.jpg`],
`Find ratio of total CD’s sold by A & D together to total CD’s sold by B?`,
["5 : 3","3 : 5","5 : 4","5 : 6","4 : 5"]],
"Q35)":[["text&image",`<p><strong>Direction (31 &ndash; 35):</strong> Given bar graph shows percentage distribution of total CD&rsquo;s ordered by four shopkeeper (A, B, C &amp; D) and percentage of CD&rsquo;s sold by these four shopkeepers out of total CD&rsquo;s ordered by each. Read the data carefully and answer the questions.</p>`,`./imgq31.jpg`],
`<p>If total CD&rsquo;s ordered by shopkeeper X is 100% more than total unsold CD&rsquo;s by D and X sold 30% of total ordered CD&rsquo;s, then find unsold CD&rsquo;s by X are what percent of unsold CD&rsquo;s by A?</p>`,
["105%","110%","100%","96%","90%"]],
"Q36)":[["text",`<p><strong>Directions (36-40): In each question two equations numbered (I) and (II) are given. You should solve both the equations and mark appropriate answer. </strong></p>`],
`<p><strong>I.</strong> x&sup2; &ndash; 7x + 10 = 0</p>
<p><strong>II.</strong> y&sup2; &ndash; 2y &ndash; 3 = 0</p>`,
["if x > y","if x ≥ y","if x < y","if x ≤ y","if = y or the relationship cannot be established"]],
"Q37)":[["text",`<p><strong>Directions (36-40): In each question two equations numbered (I) and (II) are given. You should solve both the equations and mark appropriate answer. </strong></p>`],
`<p><strong>I.</strong> x&sup2; &ndash; 24x + 143 = 0x&sup2; &ndash; 7x + 10 = 0</p>
<p><strong>II.</strong> y&sup2; &ndash; 29y + 210 = 0</p>`,
["if x > y","if x ≥ y","if x < y","if x ≤ y","if = y or the relationship cannot be established"]],
"Q38)":[["text",`<p><strong>Directions (36-40): In each question two equations numbered (I) and (II) are given. You should solve both the equations and mark appropriate answer. </strong></p>`],
`<p><strong>I.</strong> x&sup2; + 22x + 117 = 0</p>
<p><strong>II.</strong> y&sup2; + 23y + 132 = 0</p>`,
["if x > y","if x ≥ y","if x < y","if x ≤ y","if = y or the relationship cannot be established"]],
"Q39)":[["text",`<p><strong>Directions (36-40): In each question two equations numbered (I) and (II) are given. You should solve both the equations and mark appropriate answer. </strong></p>`],
`<p><strong>I.</strong> 2x&sup2; &ndash; 3x &ndash; 20 = 0</p>
<p><strong>II.</strong> 2y&sup2; + 11y + 15 = 0</p>`,
["if x > y","if x ≥ y","if x < y","if x ≤ y","if = y or the relationship cannot be established"]],
"Q40)":[["text",`<p><strong>Directions (36-40): In each question two equations numbered (I) and (II) are given. You should solve both the equations and mark appropriate answer. </strong></p>`],
`<p><strong>I.</strong> x&sup2; &ndash; 12x + 32 = 0</p>
<p><strong>II.</strong> y&sup2; &ndash; 20y + 96 = 0</p>`,
["if x > y","if x ≥ y","if x < y","if x ≤ y","if = y or the relationship cannot be established"]],
"Q41)":[["none",``],
`<p>A boat travels in upstream. If the speed of boat in upstream is decreased by 40% then it is equal to the speed of current and speed of boat in still water is given as 240 km/hr. Then find upstream speed of boat? (in km/hr).</p>`,
["120","180","150","210","125"]],
"Q42)":[["none",``],
`<p>&nbsp;A man invested Rs. X and Rs. 2X at 15% simple interest and at 8% compound interest (compounding annually) for two years respectively. Difference between simple interest and compound interest received after two years is Rs.820. Find the value of X.</p>`,
["Rs.25000","Rs.30600","Rs.28600","Rs.22200","Rs.26200"]],
"Q43)":[["none",``],
`<p>Length of train A is 400 meters and length of train B is &lsquo;x&rsquo; meters more than train A. If speed of both train A &amp; B is equal and they cross a pole in 16 sec and 24 secs respectively, then in what time train &lsquo;B&rsquo; will cross 400 m long platform.</p>`,
["32 sec","40 sec","45 sec","54 sec","24 sec"]],
"Q44)":[["none",``],
`<p>&lsquo;A&rsquo; is 40% less efficient than &lsquo;B&rsquo; who can do the same work in 20% less time than &lsquo;C&rsquo;. If A and B together can complete 80% of work in 12 days, then in how many days 60% of work can be completed by B and C together.</p>`,
["2 days","4 days","6 days","8 days","10 days"]],
"Q45)":[["none",``],
`<p>Perimeter of rectangle is equal to the perimeter of square whose area is 400 cm&sup2; and length of rectangle is 40% more than the side of a square then find the area of rectangle?</p>`,
["248 cm²","420 cm²","356 cm²","336 cm²","348 cm²"]],
"Q46)":[["none",``],
`<p>A shopkeeper has two articles jeans and shirt. Cost price of a jeans is 32.5% more than cost price of a shirt and cost price of jeans is increased by 30% and it sold in Rs. 4134 at the profit of 25%. If shirt marked up 15% above cost price, then find the marked price of shirt (in Rs.)?</p>`,
["2200","2208","2280","2820","2082"]],
"Q47)":[["none",``],
`<p>In first mixture, quantity of milk was 6 lit more than that of water. After adding 40 ltr of second mixture (having ratio of water to milk 3: 5) in the first mixture, ratio of water to milk in the final mixture becomes 9: 13. Find the total quantity of water in the final mixture.</p>`,
["27 ltr","31.5 ltr","36 ltr","45 ltr","None of these"]],
"Q48)":[["none",``],
`<p>A and B started a business together with capital of Rs. 8000 and Rs. 10,000 respectively. A left the business after 5 months while B continued. A gets 20% of total profit for managing business and remaining is distributed in ratio of their profit sharing. If after a year, A gets total profit of Rs.2500 then, find the total profit earned by &lsquo;A&rsquo; and &lsquo;B&rsquo; together.</p>`,
["10,000","8,500","7,500","6,250","5,750"]],
"Q49)":[["none",``],
`<p>The salary of A man is Rs. 50000 per month from which he spends 20% on rent, 10% of remaining on bills, 20% of further remaining on miscellaneous expenses. From the remaining amount, man gives some money to his wife and rest he invests in mutual funds in the ratio of 5 : 4. Find amount spent on rent is how much less or more than amount invested in mutual funds.</p>`,
["2800 Rs.","2400 Rs.","2600 Rs.","3200 Rs.","3000 Rs."]],
"Q50)":[["none",``],
`<p>A bag has seven red, four white and three green balls while another bag has five red, six yellow and three blue balls. A bag is selected at random and a ball drawn out of it, then Find the probability that the ball drawn is red.</p>`,
["1/7","3/7","2/7","1","6/7"]],
"Q51)":[["text&image",`<p><strong>Direction (51 &ndash; 55): Table Given below shows total number of male visitors on four different days to a park and it also shows percentage of female visitors on these four days. Read the data carefully and answer the questions.</strong></p>`,`imgq51.jpg`],
`<p>&nbsp;Total female visitors on Sunday &amp; Monday together is how much more or less than total number of female visitors on Tuesday &amp; Wednesday together.</p>`,
["160","140","120","100","80"]],
"Q52)":[["text&image",`<p><strong>Direction (51 &ndash; 55): Table Given below shows total number of male visitors on four different days to a park and it also shows percentage of female visitors on these four days. Read the data carefully and answer the questions.</strong></p>`,`imgq51.jpg`],
`<p>Total visitors on Wednesday are what percent more than total number of visitors on Sunday?</p>`,
["60%","20%","40%","80%","50%"]],
"Q53)":[["text&image",`<p><strong>Direction (51 &ndash; 55): Table Given below shows total number of male visitors on four different days to a park and it also shows percentage of female visitors on these four days. Read the data carefully and answer the questions.</strong></p>`,`imgq51.jpg`],
`<p>Total number of male visitors on Friday are 25% more than total number of male visitors on Monday, while total number of female visitors on Friday are 40% more than total number of visitors on Tuesday. Find total visitors on Friday?</p>`,
["1470","1050","1620","1200","1170"]],
"Q54)":[["text&image",`<p><strong>Direction (51 &ndash; 55): Table Given below shows total number of male visitors on four different days to a park and it also shows percentage of female visitors on these four days. Read the data carefully and answer the questions.</strong></p>`,`imgq51.jpg`],
`<p>&nbsp;Total number of visitors on Wednesday is how much more than total number of female visitors on Sunday and Monday together?</p>`,
["300","200","250","350","150"]],
"Q55)":[["text&image",`<p><strong>Direction (51 &ndash; 55): Table Given below shows total number of male visitors on four different days to a park and it also shows percentage of female visitors on these four days. Read the data carefully and answer the questions.</strong></p>`,`imgq51.jpg`],
`<p>If there is one guide for per five visitors on each day, then find total number of guides required for all visitors on these four days?</p>`,
["240","480","220","440","460"]],
"Q56)":[["text",`<p><strong>Direction (56 &ndash; 60): Find the wrong number in following number series :</strong></p>`],
`<p>5, 18, 34, 54, 79, 110, 158</p>`,
["34","5","18","54","158"]],
"Q57)":[["text",`<p><strong>Direction (56 &ndash; 60): Find the wrong number in following number series :</strong></p>`],
`<p>112, 128, 108, 132, 104, 134, 100</p>`,
["112","128","134","108","100"]],
"Q58)":[["text",`<p><strong>Direction (56 &ndash; 60): Find the wrong number in following number series :</strong></p>`],
`<p>5, 6, 14, 45, 184, 920, 5556</p>`,
["5","6","14","920","45"]],
"Q59)":[["text",`<p><strong>Direction (56 &ndash; 60): Find the wrong number in following number series :</strong></p>`],
`<p>10, 22, 35, 50, 68, 92, 117</p>`,
["92","117","10","22","35"]],
"Q60)":[["text",`<p><strong>Direction (56 &ndash; 60): Find the wrong number in following number series :</strong></p>`],
`<p>64, 34, 36, 56, 114 , 287, 860</p>`,
["114","860","64","36","56"]],
"Q61)":[["text",`<p><strong>Direction (61&minus;𝟔𝟓): Read the data carefully and answer the questions. </strong></p>
<p>There are 450 students in a school and there are two sections A &amp; B in the school. There are three streams in each section i.e., Art, Science &amp; Commerce. 75/4 % of total students in A are in Commerce and 200/7 % of total students in B are in Science. Sum of total students in Commerce in A &amp; total students in Science in B is 105. 400/21 % of total students in B are in Commerce and 50% of total students in A are in Art.</p>`],
`<p>Total students in Art in A is what percent more than total students in Science in B?</p>`,
["75%","70%","90%","100%","110%"]],
"Q62)":[["text",`<p><strong>Direction (61&minus;𝟔𝟓): Read the data carefully and answer the questions. </strong></p>
<p>There are 450 students in a school and there are two sections A &amp; B in the school. There are three streams in each section i.e., Art, Science &amp; Commerce. 75/4 % of total students in A are in Commerce and 200/7 % of total students in B are in Science. Sum of total students in Commerce in A &amp; total students in Science in B is 105. 400/21 % of total students in B are in Commerce and 50% of total students in A are in Art.</p>`],
`<p>Find the ratio of total students in Commerce in B to total students in Science in A?</p>`,
["8 : 15","8 : 17","8 : 13","8 : 11","8 : 9"]],
"Q63)":[["text",`<p><strong>Direction (61&minus;𝟔𝟓): Read the data carefully and answer the questions. </strong></p>
<p>There are 450 students in a school and there are two sections A &amp; B in the school. There are three streams in each section i.e., Art, Science &amp; Commerce. 75/4 % of total students in A are in Commerce and 200/7 % of total students in B are in Science. Sum of total students in Commerce in A &amp; total students in Science in B is 105. 400/21 % of total students in B are in Commerce and 50% of total students in A are in Art.</p>`],
`<p>If in other section C, total students are 180 and total student in Science in C are 25% more than total students in Commerce in B, then find total students in Art &amp; Commerce in C is how much less than total students in Art &amp;Commerce in A?</p>`,
["55","60","65","45","35"]],
"Q64)":[["text",`<p><strong>Direction (61&minus;𝟔𝟓): Read the data carefully and answer the questions. </strong></p>
<p>There are 450 students in a school and there are two sections A &amp; B in the school. There are three streams in each section i.e., Art, Science &amp; Commerce. 75/4 % of total students in A are in Commerce and 200/7 % of total students in B are in Science. Sum of total students in Commerce in A &amp; total students in Science in B is 105. 400/21 % of total students in B are in Commerce and 50% of total students in A are in Art.</p>`],
`<p>Find the average number of students in Science in A &amp; B?</p>`,
["125/2","135/2","120","130","145"]],
"Q65)":[["text",`<p><strong>Direction (61&minus;𝟔𝟓): Read the data carefully and answer the questions. </strong></p>
<p>There are 450 students in a school and there are two sections A &amp; B in the school. There are three streams in each section i.e., Art, Science &amp; Commerce. 75/4 % of total students in A are in Commerce and 200/7 % of total students in B are in Science. Sum of total students in Commerce in A &amp; total students in Science in B is 105. 400/21 % of total students in B are in Commerce and 50% of total students in A are in Art.</p>`],
`<p>If out of total students in Art in A &amp; B, ratio of boys to girl is 5 : 3 and 7 : 4 respectively, then find total boys in Art from both sections?</p>`,
["125","135","145","115","105"]],
"Q66)":[["text",`<p><strong>Direction (66-70): Study the following information carefully and answer the questions given below:</strong></p>
<p>Eight persons i.e. A, B, C, D, P, Q, R and S are sitting around a rectangular table in such a way that four persons sit on each of the four corner of the table and other four persons sit on the middle of each side. The one who sits at the corner of table faces opposite to center of table and the one who sits at the middle side of table faces towards the center of table. Persons sitting on opposite sides are exactly opposite to each other. Q sits immediate to the right of D. Both R and C are sitting opposite to each other. Only one person sits between A and B, who does not sit near to D. C sits near to Q. Two persons sit between D and S, who faces to the center.</p>`],
`<p>Who among the following sits 3rd to the right of P?</p>`,
["A","B","Q","D","None of these"]],
"Q67)":[["text",`<p><strong>Direction (66-70): Study the following information carefully and answer the questions given below:</strong></p>
<p>Eight persons i.e. A, B, C, D, P, Q, R and S are sitting around a rectangular table in such a way that four persons sit on each of the four corner of the table and other four persons sit on the middle of each side. The one who sits at the corner of table faces opposite to center of table and the one who sits at the middle side of table faces towards the center of table. Persons sitting on opposite sides are exactly opposite to each other. Q sits immediate to the right of D. Both R and C are sitting opposite to each other. Only one person sits between A and B, who does not sit near to D. C sits near to Q. Two persons sit between D and S, who faces to the center.</p>`],
`<p>How many persons sit between P and Q, when counted to the left of P?</p>`,
["One","Two","Four","Either (b) or (c)","None of these"]],
"Q68)":[["text",`<p><strong>Direction (66-70): Study the following information carefully and answer the questions given below:</strong></p>
<p>Eight persons i.e. A, B, C, D, P, Q, R and S are sitting around a rectangular table in such a way that four persons sit on each of the four corner of the table and other four persons sit on the middle of each side. The one who sits at the corner of table faces opposite to center of table and the one who sits at the middle side of table faces towards the center of table. Persons sitting on opposite sides are exactly opposite to each other. Q sits immediate to the right of D. Both R and C are sitting opposite to each other. Only one person sits between A and B, who does not sit near to D. C sits near to Q. Two persons sit between D and S, who faces to the center.</p>`],
`<p>Four of the following five are alike in a certain way and hence they form a group. Which one of the
following does not belong to that group?</p>`,
["R","D","P","C","B"]],
"Q69)":[["text",`<p><strong>Direction (66-70): Study the following information carefully and answer the questions given below:</strong></p>
<p>Eight persons i.e. A, B, C, D, P, Q, R and S are sitting around a rectangular table in such a way that four persons sit on each of the four corner of the table and other four persons sit on the middle of each side. The one who sits at the corner of table faces opposite to center of table and the one who sits at the middle side of table faces towards the center of table. Persons sitting on opposite sides are exactly opposite to each other. Q sits immediate to the right of D. Both R and C are sitting opposite to each other. Only one person sits between A and B, who does not sit near to D. C sits near to Q. Two persons sit between D and S, who faces to the center.</p>`],
`<p>Which of the following is not true regarding P?</p>`,
["C sits 2nd to the left of P","P sits immediate to the right of B","D sits opposite to P","Two persons sit between P and R, when counted to the left of R","All are true"]],
"Q70)":[["text",`<p><strong>Direction (66-70): Study the following information carefully and answer the questions given below:</strong></p>
<p>Eight persons i.e. A, B, C, D, P, Q, R and S are sitting around a rectangular table in such a way that four persons sit on each of the four corner of the table and other four persons sit on the middle of each side. The one who sits at the corner of table faces opposite to center of table and the one who sits at the middle side of table faces towards the center of table. Persons sitting on opposite sides are exactly opposite to each other. Q sits immediate to the right of D. Both R and C are sitting opposite to each other. Only one person sits between A and B, who does not sit near to D. C sits near to Q. Two persons sit between D and S, who faces to the center.</p>`],
`<p>What is the position of R with respect to Q?</p>`,
["2nd to the right","2nd to the left","3rd to the left","3rd to the right","None of these"]],
"Q71)":[["text",`<p><strong>Directions (71-73): Study the information carefully and answer the questions given below. </strong></p>
<p>Eight persons in three generation of the family. K is daughter in law of G. M is father of L, who is daughter-in-law of P. H is brother-in-law of G and only son of F. T is grandson of F. H is unmarried. G is male. M has two child.</p>`],
`<p>How is M related to G?</p>`,
["Father","Brother","Father-in- law","Brother-in-law","None of these"]],
"Q72)":[["text",`<p><strong>Directions (71-73): Study the information carefully and answer the questions given below. </strong></p>
<p>Eight persons in three generation of the family. K is daughter in law of G. M is father of L, who is daughter-in-law of P. H is brother-in-law of G and only son of F. T is grandson of F. H is unmarried. G is male. M has two child.</p>`],
`<p>How is K related to L?</p>`,
["Daughter","Mother-in-law","Daughter-in-law","Sister","None of these"]],
"Q73)":[["text",`<p><strong>Directions (71-73): Study the information carefully and answer the questions given below. </strong></p>
<p>Eight persons in three generation of the family. K is daughter in law of G. M is father of L, who is daughter-in-law of P. H is brother-in-law of G and only son of F. T is grandson of F. H is unmarried. G is male. M has two child.</p>`],
`<p>Who among the following is son of M?</p>`,
["H","G","T","L","None of these"]],
"Q74)":[["text",`<p><strong>Direction (74-77): Study the following information carefully and answer the questions given below: </strong></p>
<p>In a certain code language &lsquo;work just not done&rsquo; is coded as &lsquo;ds gi nj hq&rsquo; &lsquo;work same and equal&rsquo; is coded as &lsquo;gi sw as xz&rsquo; &lsquo;same case just opposite&rsquo; is coded as &lsquo;sw ds ap kl&rsquo; &lsquo;not opposite but equal&rsquo; is coded as &lsquo;mn ap nj as&rsquo;</p>`],
`<p>What is the code of &lsquo;opposite&rsquo; as per the given code language?</p>`,
["ap","gi","mn","as","None of these"]],
"Q75)":[["text",`<p><strong>Direction (74-77): Study the following information carefully and answer the questions given below: </strong></p>
<p>In a certain code language &lsquo;work just not done&rsquo; is coded as &lsquo;ds gi nj hq&rsquo; &lsquo;work same and equal&rsquo; is coded as &lsquo;gi sw as xz&rsquo; &lsquo;same case just opposite&rsquo; is coded as &lsquo;sw ds ap kl&rsquo; &lsquo;not opposite but equal&rsquo; is coded as &lsquo;mn ap nj as&rsquo;</p>`],
`<p>What is the code of &lsquo;same&rsquo; as per the given code language?</p>`,
["ap","sw","mn","as","None of these"]],
"Q76)":[["text",`<p><strong>Direction (74-77): Study the following information carefully and answer the questions given below: </strong></p>
<p>In a certain code language &lsquo;work just not done&rsquo; is coded as &lsquo;ds gi nj hq&rsquo; &lsquo;work same and equal&rsquo; is coded as &lsquo;gi sw as xz&rsquo; &lsquo;same case just opposite&rsquo; is coded as &lsquo;sw ds ap kl&rsquo; &lsquo;not opposite but equal&rsquo; is coded as &lsquo;mn ap nj as&rsquo;</p>`],
`<p>What is the code of &lsquo;case&rsquo; as per the given code language?</p>`,
["gi","sw","kl","as","None of these"]],
"Q77)":[["text",`<p><strong>Direction (74-77): Study the following information carefully and answer the questions given below: </strong></p>
<p>In a certain code language &lsquo;work just not done&rsquo; is coded as &lsquo;ds gi nj hq&rsquo; &lsquo;work same and equal&rsquo; is coded as &lsquo;gi sw as xz&rsquo; &lsquo;same case just opposite&rsquo; is coded as &lsquo;sw ds ap kl&rsquo; &lsquo;not opposite but equal&rsquo; is coded as &lsquo;mn ap nj as&rsquo;</p>`],
`<p>What is the code of &lsquo;equal work&rsquo; as per the given code language?</p>`,
["gi ds","sw kl","as gi","as sw","None of these"]],
"Q78)":[["text",`<p><strong>Directions (78-82): Study the following information carefully and answer the question given below. </strong></p>
<p>Seven students A, B, D, E, G, H and L have practical exams on different day of the same week starting from Monday to Sunday, but not necessarily in the same order. Only one student has a practical exam on each day. There are more than three students have practical exam after A. Only one student has practical exam between A and H. There are three students have practical exam between G and B. G has practical exam before H but not immediate before H. There are three students have practical exam between D and E, who does not have practical exam in the last day of week.</p>`],
`<p>On which of the following day L has practical exam?</p>`,
["Tuesday","Thursday","Saturday","Monday","None of these"]],
"Q79)":[["text",`<p><strong>Directions (78-82): Study the following information carefully and answer the question given below. </strong></p>
<p>Seven students A, B, D, E, G, H and L have practical exams on different day of the same week starting from Monday to Sunday, but not necessarily in the same order. Only one student has a practical exam on each day. There are more than three students have practical exam after A. Only one student has practical exam between A and H. There are three students have practical exam between G and B. G has practical exam before H but not immediate before H. There are three students have practical exam between D and E, who does not have practical exam in the last day of week.</p>`],
`<p>Who among the following has practical exam on Wednesday?</p>`,
["A","H","G","E","None of these"]],
"Q80)":[["text",`<p><strong>Directions (78-82): Study the following information carefully and answer the question given below. </strong></p>
<p>Seven students A, B, D, E, G, H and L have practical exams on different day of the same week starting from Monday to Sunday, but not necessarily in the same order. Only one student has a practical exam on each day. There are more than three students have practical exam after A. Only one student has practical exam between A and H. There are three students have practical exam between G and B. G has practical exam before H but not immediate before H. There are three students have practical exam between D and E, who does not have practical exam in the last day of week.</p>`],
`<p>How many students have exam between E and B?</p>`,
["No one","One","Two","Three","More than three"]],
"Q81)":[["text",`<p><strong>Directions (78-82): Study the following information carefully and answer the question given below. </strong></p>
<p>Seven students A, B, D, E, G, H and L have practical exams on different day of the same week starting from Monday to Sunday, but not necessarily in the same order. Only one student has a practical exam on each day. There are more than three students have practical exam after A. Only one student has practical exam between A and H. There are three students have practical exam between G and B. G has practical exam before H but not immediate before H. There are three students have practical exam between D and E, who does not have practical exam in the last day of week.</p>`],
`<p>Who among the following has practical exam immediate before H?</p>`,
["E","L","B","D","None of these"]],
"Q82)":[["text",`<p><strong>Directions (78-82): Study the following information carefully and answer the question given below. </strong></p>
<p>Seven students A, B, D, E, G, H and L have practical exams on different day of the same week starting from Monday to Sunday, but not necessarily in the same order. Only one student has a practical exam on each day. There are more than three students have practical exam after A. Only one student has practical exam between A and H. There are three students have practical exam between G and B. G has practical exam before H but not immediate before H. There are three students have practical exam between D and E, who does not have practical exam in the last day of week.</p>`],
`<p>Four of the following five belong to a group in a certain way, find which of the one does not belong to
that group?</p>`,
["A, G","H, E","L, B","E, A","B, D"]],
"Q83)":[["text",`<p><strong>Directions (83-85): In these questions, relationship between different elements is show in the statements. The statements are followed by conclusions. Study the conclusions based on the given statements and select the appropriate answer:</strong></p>`],
`<p><strong>Statements:</strong> J=Q&gt;R=V&gt;B=Y&gt;K&ge;M</p>
<p><strong>Conclusion</strong> <strong>I:</strong> R&gt;Y <strong>II:</strong> J&lt;B</p>`,
["If only conclusion I follows.","If only conclusion II follows.","If either conclusion I or II follows","If neither conclusion I nor II follows.","If both conclusions I and II follow."]],
"Q84)":[["text",`<p><strong>Directions (83-85): In these questions, relationship between different elements is show in the statements. The statements are followed by conclusions. Study the conclusions based on the given statements and select the appropriate answer:</strong></p>`],
`<p><strong>Statements:</strong> Q=T<em>X&ge;G&gt;P=Z&lt;O</em></p>
<p><strong>Conclusion</strong> &nbsp;<strong>I:</strong> Z&le;I <strong>II:</strong> O&gt;G</p>`,
["If only conclusion I follows.","If only conclusion II follows.","If either conclusion I or II follows","If neither conclusion I nor II follows.","If both conclusions I and II follow."]],
"Q85)":[["text",`<p><strong>Directions (83-85): In these questions, relationship between different elements is show in the statements. The statements are followed by conclusions. Study the conclusions based on the given statements and select the appropriate answer:</strong></p>`],
`<p><strong>Statements:</strong> S&gt;F&ge;B=D&le;P=E&le;L&gt;Q</p>
<p><strong>Conclusion</strong> <strong>I:</strong> E&gt;B<strong> II</strong>: B=E</p>`,
["If only conclusion I follows.","If only conclusion II follows.","If either conclusion I or II follows","If neither conclusion I nor II follows.","If both conclusions I and II follow."]],
"Q86)":[["text",`<p><strong>Directions (86-88): Study the information carefully and answer the questions given below.</strong></p>
<p>Point P is 8m west of point G. Point G is 16m east of point T. Point H is east of point E. Point E is 5m north-west of point L. Point A is 12m south of point F and point P is midpoint between them. Point L is 8m south of point S. Point H is midpoint between point L and S. Point T is 14m south of point E.</p>`],
`<p>If Point B is west of point A and south of point S, then what is the distance between point A and point
B?</p>`,
["13m","7m","6m","5m","None of these"]],
"Q87)":[["text",`<p><strong>Directions (86-88): Study the information carefully and answer the questions given below.</strong></p>
<p>Point P is 8m west of point G. Point G is 16m east of point T. Point H is east of point E. Point E is 5m north-west of point L. Point A is 12m south of point F and point P is midpoint between them. Point L is 8m south of point S. Point H is midpoint between point L and S. Point T is 14m south of point E.</p>`],
`<p>In which direction point L is with respect to point F?</p>`,
["South","South-east","North-east","East","None of these"]],
"Q88)":[["text",`<p><strong>Directions (86-88): Study the information carefully and answer the questions given below.</strong></p>
<p>Point P is 8m west of point G. Point G is 16m east of point T. Point H is east of point E. Point E is 5m north-west of point L. Point A is 12m south of point F and point P is midpoint between them. Point L is 8m south of point S. Point H is midpoint between point L and S. Point T is 14m south of point E.</p>`],
`<p>What is the distance between point E and point H?</p>`,
["7m","3m","4m","5m","None of these"]],
"Q89)":[["none",``],
`<p>How many pairs of letters are there in the word <strong>&ldquo;SPARKLE&rdquo;</strong> which has as many letters between them as we have in the English alphabetical series (from both forward and backward direction)?</p>`,
["One","None","Two","Three","More than three"]],
"Q90)":[["none",``],
`<p>Which of the following is second letter from the left end of the meaningful word formed by the 1st,3rd, 5th, and 6th letter of the word <strong>&ldquo;DRAWER&rdquo;</strong> If more than one word is formed mark X as your answer. If no such word is formed mark Y as your answer?</p>`,
["R","D","E","X","Y"]],
"Q91)":[["text",`<p><strong>Direction (91-95): Study the following information carefully and answer the questions given below: </strong></p>
<p>A certain number of persons are sitting in a row facing to the north. There is one person sits between N and M and one of them sit at the extreme end of the row. There are three persons sit between N and C. L sits 2nd to the left of C. There are six persons sit between C and B, who sits 3rd from one of the end. B sits 2nd to the left of R, who does not sit at the extreme end. There are four persons sit between O and N. More than three persons sit between M and O. There are two persons sit between K and R.</p>`],
`<p>How many persons are sitting in the row?</p>`,
["12","15","18","17","16"]],
"Q92)":[["text",`<p><strong>Direction (91-95): Study the following information carefully and answer the questions given below: </strong></p>
<p>A certain number of persons are sitting in a row facing to the north. There is one person sits between N and M and one of them sit at the extreme end of the row. There are three persons sit between N and C. L sits 2nd to the left of C. There are six persons sit between C and B, who sits 3rd from one of the end. B sits 2nd to the left of R, who does not sit at the extreme end. There are four persons sit between O and N. More than three persons sit between M and O. There are two persons sit between K and R.</p>`],
`<p>How many persons sit between R and C?</p>`,
["None","Four","Six","Five","Seven"]],
"Q93)":[["text",`<p><strong>Direction (91-95): Study the following information carefully and answer the questions given below: </strong></p>
<p>A certain number of persons are sitting in a row facing to the north. There is one person sits between N and M and one of them sit at the extreme end of the row. There are three persons sit between N and C. L sits 2nd to the left of C. There are six persons sit between C and B, who sits 3rd from one of the end. B sits 2nd to the left of R, who does not sit at the extreme end. There are four persons sit between O and N. More than three persons sit between M and O. There are two persons sit between K and R.</p>`],
`<p>What is the position of K with respect to B?</p>`,
["Immediate to the right","2nd to the left","Immediate to the left","2nd to the right","3rd to the left"]],
"Q94)":[["text",`<p><strong>Direction (91-95): Study the following information carefully and answer the questions given below: </strong></p>
<p>A certain number of persons are sitting in a row facing to the north. There is one person sits between N and M and one of them sit at the extreme end of the row. There are three persons sit between N and C. L sits 2nd to the left of C. There are six persons sit between C and B, who sits 3rd from one of the end. B sits 2nd to the left of R, who does not sit at the extreme end. There are four persons sit between O and N. More than three persons sit between M and O. There are two persons sit between K and R.</p>`],
`<p>The number of persons sit to the left of L is same as the number of persons sit to the right of ___?</p>`,
["N","O","C","K","None of these"]],
"Q95)":[["text",`<p><strong>Direction (91-95): Study the following information carefully and answer the questions given below: </strong></p>
<p>A certain number of persons are sitting in a row facing to the north. There is one person sits between N and M and one of them sit at the extreme end of the row. There are three persons sit between N and C. L sits 2nd to the left of C. There are six persons sit between C and B, who sits 3rd from one of the end. B sits 2nd to the left of R, who does not sit at the extreme end. There are four persons sit between O and N. More than three persons sit between M and O. There are two persons sit between K and R.</p>`],
`<p>If T sits between B and R, then how many persons sit between T and K?</p>`,
["None","One","Two","Three","None of these"]],
"Q96)":[["text",`<p><strong>Direction (96-100): Study the following information carefully and answer the questions given below: </strong></p>
<p>Eight boxes i.e. M, N, O, P, Q, R, S and T are placed one above the another but not necessarily in the same order. Three boxes are placed between M and T. M is placed either at the top most or bottom most position. Box O is placed just above to the box N. Box S is placed just below to the box T. There are two boxes placed between R and S. Not more than two boxes placed between M and R. More than three boxes placed between O and P.</p>`],
`<p>Which of the following box is placed third from the bottom?</p>`,
["S","Q","O","R","None of these"]],
"Q97)":[["text",`<p><strong>Direction (96-100): Study the following information carefully and answer the questions given below: </strong></p>
<p>Eight boxes i.e. M, N, O, P, Q, R, S and T are placed one above the another but not necessarily in the same order. Three boxes are placed between M and T. M is placed either at the top most or bottom most position. Box O is placed just above to the box N. Box S is placed just below to the box T. There are two boxes placed between R and S. Not more than two boxes placed between M and R. More than three boxes placed between O and P.</p>`],
`<p>How many boxes are placed between O and Q?</p>`,
["None","One","Four","Two","None of these"]],
"Q98)":[["text",`<p><strong>Direction (96-100): Study the following information carefully and answer the questions given below: </strong></p>
<p>Eight boxes i.e. M, N, O, P, Q, R, S and T are placed one above the another but not necessarily in the same order. Three boxes are placed between M and T. M is placed either at the top most or bottom most position. Box O is placed just above to the box N. Box S is placed just below to the box T. There are two boxes placed between R and S. Not more than two boxes placed between M and R. More than three boxes placed between O and P.</p>`],
`<p>The number of boxes placed between P and S is same as the number of boxes placed between ___ and
R?</p>`,
["M","Q","N","T","O"]],
"Q99)":[["text",`<p><strong>Direction (96-100): Study the following information carefully and answer the questions given below: </strong></p>
<p>Eight boxes i.e. M, N, O, P, Q, R, S and T are placed one above the another but not necessarily in the same order. Three boxes are placed between M and T. M is placed either at the top most or bottom most position. Box O is placed just above to the box N. Box S is placed just below to the box T. There are two boxes placed between R and S. Not more than two boxes placed between M and R. More than three boxes placed between O and P.</p>`],
`<p>The number of boxes placed above of the box O is same as the
number of boxes placed below to the box?</p>`,
["R","Q","P","T","None of these"]],
"Q100)":[["text",`<p><strong>Direction (96-100): Study the following information carefully and answer the questions given below: </strong></p>
<p>Eight boxes i.e. M, N, O, P, Q, R, S and T are placed one above the another but not necessarily in the same order. Three boxes are placed between M and T. M is placed either at the top most or bottom most position. Box O is placed just above to the box N. Box S is placed just below to the box T. There are two boxes placed between R and S. Not more than two boxes placed between M and R. More than three boxes placed between O and P.</p>`],
`<p>Four of the following five are alike in a certain way and hence
they form a group. Which one of the
following does not belong to that group?</p>`,
["M and Q","P and T","R and S","Q and O","N and Q"]],
};
/*
"Q96)":[["text",``],
`<p></p>`,
],
*/
var answerKey={
"Q01)": "O1",
"Q02)": "O4",
"Q03)": "O1",
"Q04)": "O2",
"Q05)": "O0",
"Q06)": "O2",
"Q07)": "O1",
"Q08)": "O2",
"Q09)": "O3",
"Q10)": "O3",
"Q11)": "O1",
"Q12)": "O3",
"Q13)": "O0",
"Q14)": "O3",
"Q15)": "O3",
"Q16)": "O0",
"Q17)": "O3",
"Q18)": "O0",
"Q19)": "O1",
"Q20)": "O4",
"Q21)": "O4",
"Q22)": "O1",
"Q23)": "O0",
"Q24)": "O2",
"Q25)": "O3",
"Q26)": "O0",
"Q27)": "O2",
"Q28)": "O0",
"Q29)": "O3",
"Q30)": "O4",
"Q31)": "O0",
"Q32)": "O4",
"Q33)": "O1",
"Q34)": "O0",
"Q35)": "O0",
"Q36)": "O4",
"Q37)": "O2",
"Q38)": "O4",
"Q39)": "O1",
"Q40)": "O3",
"Q41)": "O2",
"Q42)": "O0",
"Q43)": "O1",
"Q44)": "O3",
"Q45)": "O3",
"Q46)": "O1",
"Q47)": "O2",
"Q48)": "O3",
"Q49)": "O0",
"Q50)": "O1",
"Q51)": "O4",
"Q52)": "O2",
"Q53)": "O0",
"Q54)": "O1",
"Q55)": "O1",
"Q56)": "O4",
"Q57)": "O2",
"Q58)": "O3",
"Q59)": "O0",
"Q60)": "O1",
"Q61)": "O3",
"Q62)": "O0",
"Q63)": "O4",
"Q64)": "O1",
"Q65)": "O2",
"Q66)": "O0",
"Q67)": "O1",
"Q68)": "O4",
"Q69)": "O3",
"Q70)": "O3",
"Q71)": "O2",
"Q72)": "O2",
"Q73)": "O0",
"Q74)": "O0",
"Q75)": "O1",
"Q76)": "O2",
"Q77)": "O2",
"Q78)": "O2",
"Q79)": "O3",
"Q80)": "O1",
"Q81)": "O0",
"Q82)": "O4",
"Q83)": "O0",
"Q84)": "O3",
"Q85)": "O2",
"Q86)": "O3",
"Q87)": "O4",
"Q88)": "O1",
"Q89)": "O4",
"Q90)": "O3",
"Q91)": "O4",
"Q92)": "O1",
"Q93)": "O2",
"Q94)": "O1",
"Q95)": "O1",
"Q96)": "O0",
"Q97)": "O3",
"Q98)": "O4",
"Q99)": "O2",
"Q100)": "O4"
};
var start=document.getElementById("Start");
var grid=document.getElementById("gridc");
var mcq=document.getElementById("mcq");
var timer=document.getElementById("timer");
var sectimer=document.getElementById("sectimer");
var navbtn=document.getElementById("navbtn");
var examhead=document.getElementById("examhead");
var modalgrid=document.getElementById("modalgridc");
var section_name=document.getElementById("section-name");
var modalqattempt=document.getElementById("modalqattempt");
var qattempt=document.getElementById("qattempt");
var submitEndTimer=document.getElementById("submitEndTimer");
var secEndTimer=document.getElementById("secEndTimer");
var qlength=100,curr=0,time_sec=60*60,marks_positive=1,marks_negative=0.25;
var sectional_names=["English","Maths","Reasoning"],sectional_time=[20*60,20*60,20*60];
var sectional_qnum=[[1,30],[31,65],[66,100]];
var curr_sec=0,secnum=3;
var stateQP=Array(qlength).fill("");
var timefunction;
var response={};
var resp_sec=[{},{},{}];
//fetch('./question.js').then((data)=>{console.log(data);question=data;});
function secToHMS(sec){
    let minutes=Math.floor(sec/60);
    let seconds=sec%60;
    let hours=Math.floor(minutes/60);
    minutes=minutes%60;
    if(minutes<10)
        minutes="0"+minutes;
    if(seconds<10)
        seconds="0"+seconds;
    if(hours<10)
        hours="0"+hours;
    return `${hours}:${minutes}:${seconds}`;
}
function attemptRefresh(){
    if(curr_sec>=secnum)
        return;
    let totalq=sectional_qnum[curr_sec][1]-sectional_qnum[curr_sec][0]+1;
    let totala=Object.keys(resp_sec[curr_sec]).length;
    modalqattempt.textContent=`${totala}/${totalq}`;
    qattempt.textContent=`${totala}/${totalq}`;
}
function updateTime(){
    if(time_sec<0){
        clearInterval(timefunction);
        submitfinal();
        document.getElementById("qp-close").click();
        document.getElementById("submit-close").click();
        document.getElementById("endsec-close").click();
        return;
    }
    if(sectional_time[curr_sec]===0){
        storeAndColor();
        curr_sec++;
        if(curr_sec!=sectional_time.length)
            fetchQuestionPanel(sectional_qnum[curr_sec][0],sectional_qnum[curr_sec][1]);
        document.getElementById("qp-close").click();
        document.getElementById("submit-close").click();
        document.getElementById("endsec-close").click();
        return;
    }
    timer.textContent=secToHMS(time_sec);
    let temp=secToHMS(sectional_time[curr_sec]);
    sectimer.textContent=temp;
    secEndTimer.textContent=temp;
    submitEndTimer.textContent=temp;
    sectional_time[curr_sec]--;
    time_sec--;
}
function endSection(){
    clearInterval(timefunction);
    storeAndColor();
    time_sec-=sectional_time[curr_sec];
    curr_sec++;
    if(curr_sec>=secnum)
        return;
    fetchQuestionPanel(sectional_qnum[curr_sec][0],sectional_qnum[curr_sec][1]);
    timefunction=setInterval(updateTime,1000);
    attemptRefresh();
}
function fetchQuestionPanel(start,end){
    let str="";
    let str1="";
    for(let i=start;i<=end;i++){
        if(i<10){
            str+=`<div class="col-2 px-1 bg-white border border-2 border-secondary rounded-2 height1 m-1 text-center cp" id="q${i}" onClick="fetchAnyQuestion(this)">0${i}</div>`;
            str1+=`<div class="col-2 px-1 bg-white border border-2 border-secondary rounded-2 height1 m-1 text-center cp" id="q${i}m" onClick="fetchAnyQuestion(this)" data-bs-dismiss="modal">0${i}</div>`;
        }
        else{
            str+=`<div class="col-2 px-1 bg-white border border-2 border-secondary rounded-2 height1 m-1 text-center cp" id="q${i}" onClick="fetchAnyQuestion(this)">${i}</div>`;
            str1+=`<div class="col-2 px-1 bg-white border border-2 border-secondary rounded-2 height1 m-1 text-center cp" id="q${i}m" onClick="fetchAnyQuestion(this)" data-bs-dismiss="modal">${i}</div>`;
        }
    }
    grid.innerHTML=str;
    modalgrid.innerHTML=str1;
    curr=start;
    fetchquestion(curr);
    section_name.innerHTML=`<h4>${sectional_names[curr_sec]}</h4>`
}
start.onclick=function(){
    fetchQuestionPanel(sectional_qnum[curr_sec][0],sectional_qnum[curr_sec][1]);
    timefunction=setInterval(updateTime,1000);
    attemptRefresh();
}
function colorCheck(qnumber,modalqnumber,bgcolor){
    let qnums=parseInt(qnumber.id.substring(1))-1;
    if(qnumber.classList.contains("bg-success")||qnumber.classList.contains("bg-danger")||qnumber.classList.contains("bg-white")){
        qnumber.classList.remove("bg-white","bg-danger","bg-success");
        modalqnumber.classList.remove("bg-white","bg-danger","bg-success");
        qnumber.classList.add(bgcolor);
        modalqnumber.classList.add(bgcolor);
        stateQP[qnums]=bgcolor;
    }
    else if(qnumber.classList.contains("bg-warning")){
        if(bgcolor==="bg-white"||bgcolor==="bg-purple"){
            qnumber.classList.remove("bg-warning");
            modalqnumber.classList.remove("bg-warning");
            qnumber.classList.add(bgcolor);
            modalqnumber.classList.add(bgcolor);
            stateQP[qnums]=bgcolor;
        }
        else if(bgcolor==="bg-success"){
            qnumber.classList.remove("bg-warning");
            modalqnumber.classList.remove("bg-warning");
            qnumber.classList.add("bg-purple");
            modalqnumber.classList.add("bg-purple");
            stateQP[qnums]="bg-purple";
        }
    }
    else{
        if(bgcolor==="bg-white"){
            qnumber.classList.remove("bg-purple");
            modalqnumber.classList.remove("bg-purple");
            qnumber.classList.add(bgcolor);
            modalqnumber.classList.add(bgcolor);
            stateQP[qnums]=bgcolor;
        }
    }
}
var nextclick=function(){
    storeAndColor();
    removeBorderColor(curr);
    curr++;
    fetchquestion(curr);
}
var prevclick=function(){
    storeAndColor();
    removeBorderColor(curr);
    curr--;
    fetchquestion(curr);
}
function storeAndColor(){
    let b=false;
    let qnum="";
    if(curr<10)
        qnum=`0${curr}`;
    else
        qnum=""+curr;
    let options=question[`Q${qnum})`][2];
    for(let i=0;i<options.length;i++){
        if(document.getElementById(`O${i}`).checked){
            b=true;
            response[`Q${qnum})`]=`O${i}`;
            resp_sec[curr_sec][`Q${qnum})`]=`O${i}`;
            break;
        }
    }
    let qnumber=document.getElementById(`q${curr}`);
    let modalqnumber=document.getElementById(`q${curr}m`);
    if(b)
        colorCheck(qnumber,modalqnumber,"bg-success");
    else
        colorCheck(qnumber,modalqnumber,"bg-danger");
    attemptRefresh();
}
function fetchAnyQuestion(element){
    storeAndColor();
    removeBorderColor(curr);
    let ele_id=element.id;
    if(ele_id.charAt(ele_id.length-1)==='m')
        curr=parseInt(ele_id.substring(1,ele_id.length-1));
    else
        curr=parseInt(ele_id.substring(1,ele_id.length));
    fetchquestion(curr);
}
function clearresponse(){
    let qnumber=document.getElementById(`q${curr}`);
    let modalqnumber=document.getElementById(`q${curr}m`);
    colorCheck(qnumber,modalqnumber,"bg-white");
    if(curr<10)
        qnum=`0${curr}`;
    else
        qnum=""+curr;
    let options=question[`Q${qnum})`][2];
    for(let i=0;i<options.length;i++){
        document.getElementById(`O${i}`).checked=false;
    }
    delete response[`Q${qnum})`];
    delete resp_sec[curr_sec][`Q${qnum})`];
    attemptRefresh();
}
function calScore(){
    let finalScore=0;
    let arr=Object.keys(answerKey);
    let str=`<div class="row justify-content-start mx-0"><div class="col-12 mx-0"><table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th scope="col">Section Name</th>
        <th scope="col">Correct</th>
        <th scope="col">Wrong</th>
        <th scope="col">Marks</th>
      </tr>
    </thead>
    <tbody>`;
    for(let i=0;i<arr.length;i++){
        if(response[arr[i]]){
            if(answerKey[arr[i]]===response[arr[i]])
                finalScore+=marks_positive;
            else
                finalScore-=marks_negative;
        }
        //console.log(finalScore);
    }
    for(let i=0;i<secnum;i++){
        let secpos=0,secneg=0,secmarks=0;
        for(let j=sectional_qnum[i][0];j<=sectional_qnum[i][1];j++){
            let qnum="";
            if(j<10)
                qnum=`0${j}`;
            else
                qnum=""+j;
            if(response[`Q${qnum})`]){
                if(answerKey[`Q${qnum})`]===response[`Q${qnum})`]){
                    secmarks+=marks_positive;
                    secpos++;
                }
                else{
                    secmarks-=marks_negative;
                    secneg++;
                }
            }
        }
        str+=`<tr>
            <th scope="row">${sectional_names[i]}</th>
            <td>${secpos}</td>
            <td>${secneg}</td>
            <td>${secmarks}</td>
        </tr>`
    }
    str+=`</tbody>
    </table></div></div>`;
    mcq.innerHTML=str;
    return finalScore;
}
function submitfinal(){
    clearInterval(timefunction);
    navbtn.innerHTML="";
    document.getElementById("clrreview").innerHTML="";
    storeAndColor();
    examhead.innerHTML=`Marks Scored: ${calScore()}`;
    section_name.innerHTML="";
    fetchResponse();
}
function fetchAllQp(){
    let str="";
    let str1="";
    for(let i=1;i<=qlength;i++){
        if(i<10){
            str+=`<div class="col-2 px-1 ${stateQP[i-1]} border border-2 border-secondary rounded-2 height1 m-1 text-center" id="q${i}">0${i}</div>`;
            str1+=`<div class="col-2 px-1 ${stateQP[i-1]} border border-2 border-secondary rounded-2 height1 m-1 text-center" id="q${i}m" data-bs-dismiss="modal">0${i}</div>`;
        }
        else{
            str+=`<div class="col-2 px-1 ${stateQP[i-1]} border border-2 border-secondary rounded-2 height1 m-1 text-center" id="q${i}">${i}</div>`;
            str1+=`<div class="col-2 px-1 ${stateQP[i-1]} border border-2 border-secondary rounded-2 height1 m-1 text-center" id="q${i}m" data-bs-dismiss="modal">${i}</div>`;
        }
    }
    grid.innerHTML=str;
    modalgrid.innerHTML=str1;
    modalqattempt.textContent=`${Object.keys(response).length}/${qlength}`;
    qattempt.textContent=`${Object.keys(response).length}/${qlength}`;
}
function fetchResponse(){
    fetchAllQp();
    let totalresponse="";
    for(let num=1;num<=Object.keys(question).length;num++){
        var qnum="";
        if(num<10)
            qnum=`0${num}`;
        else
            qnum=""+num;
        let str="";
        if(question["Q"+qnum+")"][0][0]==="text")
            str+=`<div class=" mx-3 my-2">${question["Q"+qnum+")"][0][1]}</div>`;
        else if(question["Q"+qnum+")"][0][0]==="image")
            str+=`<img class="img-fluid" src="${question["Q"+qnum+")"][0][1]}" alt="image">`;
        str+=`<div id="question" class="ms-3 my-2"><strong>Q${qnum}) </strong>${question["Q"+qnum+")"][1]}</div>`;
        let options=question[`Q${qnum})`][2];
        for(let i=0;i<options.length;i++){
            let temp="O"+i;
            if(answerKey["Q"+qnum+")"]===temp){
                if(response["Q"+qnum+")"]===temp)
                    str+=`<div class="options ms-5 text-success"><input type="radio" name="qmcq${num}" value="op${i}" checked="true" disabled>${options[i]}</div>`;
                else
                    str+=`<div class="options ms-5 text-success"><input type="radio" name="qmcq${num}" value="op${i}" disabled>${options[i]}</div>`;
            }
            else if(response["Q"+qnum+")"]===temp){
                str+=`<div class="options ms-5 text-danger"><input type="radio" name="qmcq${num}" value="op${i}" checked="true" disabled>${options[i]}</div>`;
            }
            else
                str+=`<div class="options ms-5"><input type="radio" name="qmcq${num}" value="op${i}" disabled>${options[i]}</div>`;
        }
        totalresponse+=str;
    }
    document.getElementById("responses").innerHTML=`<H4 class="text-center text-success py-2 border-bottom border-3 border-secondary">Your Responses</H4>`;
    mcq.innerHTML+=totalresponse;
    document.getElementById("scroller").scrollTop=0;
}
function markForReview(){
    let qnumber=document.getElementById(`q${curr}`);
    let modalqnumber=document.getElementById(`q${curr}m`);
    colorCheck(qnumber,modalqnumber,"bg-warning");
    storeAndColor();
}
function updateColAttempt(){
    let qnumber=document.getElementById(`q${curr}`);
    let modalqnumber=document.getElementById(`q${curr}m`);
    storeAndColor();
    attemptRefresh();
}
function addBorderColor(num){
    let qs=document.getElementById(`q${num}`);
    let modalqs=document.getElementById(`q${num}m`);
    qs.classList.remove("border-2","border-4","border-secondary","border-info");
    modalqs.classList.remove("border-2","border-4","border-secondary","border-info");
    qs.classList.add("border-4","border-info");
    modalqs.classList.add("border-4","border-info");
}
function removeBorderColor(num){
    let qs=document.getElementById(`q${num}`);
    let modalqs=document.getElementById(`q${num}m`);
    qs.classList.remove("border-2","border-4","border-secondary","border-info");
    modalqs.classList.remove("border-2","border-4","border-secondary","border-info");
    qs.classList.add("border-2","border-secondary");
    modalqs.classList.add("border-2","border-secondary");
}
function fetchquestion(num){
    addBorderColor(num);
    var qnum="";
    if(num<10)
        qnum=`0${num}`;
    else
        qnum=""+num;
    let str="";
    if(question["Q"+qnum+")"][0][0]==="text")
        str+=`<div class=" mx-3 my-2">${question["Q"+qnum+")"][0][1]}</div>`;
    else if(question["Q"+qnum+")"][0][0]==="image")
        str+=`<img class="img-fluid" src="${question["Q"+qnum+")"][0][1]}" alt="image">`;
    else if(question["Q"+qnum+")"][0][0]==="text&image"){
        str+=`<div class=" mx-3 my-2">${question["Q"+qnum+")"][0][1]}</div>`;
        str+=`<img class="img-fluid" src="${question["Q"+qnum+")"][0][2]}" alt="image">`;
    }
    str+=`<div id="question" class="ms-3 my-2"><strong>Q${qnum}) </strong>${question["Q"+qnum+")"][1]}</div>`;
    let options=question[`Q${qnum})`][2];
    for(let i=0;i<options.length;i++){
        str+=`<div class="options ms-5"><input type="radio" id="O${i}" name="qmcq" value="op${i}" onClick="updateColAttempt()">${options[i]}</div>`;
    }
    document.getElementById("clrreview").innerHTML=`<div id="clrresp" class="text-primary text-decoration-underline ms-3 my-2 cursor-pointer" onclick="clearresponse()">
            Clear Response & Review
        </div>
        <div class="text-primary text-capitalize text-decoration-underline me-3 my-2 cursor-pointer" onclick="markForReview()">
            mark for review
        </div>`;
    /*if(num==1){
        if(qlength==1)
            navbtn.innerHTML=`<button type="button" class="btn btn-danger me-2 px-4" id="Submit" data-bs-toggle="modal" data-bs-target="#modalsubmit">Submit</button>`;
        else{
            navbtn.innerHTML=`<button type="button" class="btn btn-primary me-2 px-4" id="Next" onClick="nextclick()">Next</button>`;
        }
    }
    else if(num==qlength){
        if(num!=sectional_qnum[curr_sec][0]){
            navbtn.innerHTML=`<button type="button" class="btn btn-outline-primary me-2" id="Prev" onClick="prevclick()">Back</button>
            <button type="button" class="btn btn-danger ms-2 px-4" id="Submit" data-bs-toggle="modal" data-bs-target="#modalsubmit">Submit</button>`;
        }
        else{
            navbtn.innerHTML=`<button type="button" class="btn btn-danger ms-2 px-4" id="Submit" data-bs-toggle="modal" data-bs-target="#modalsubmit">Submit</button>`;
        }
    }
    else{
        temps="";
        if(num==sectional_qnum[curr_sec][1]){
            temps=`<button type="button" class="btn btn-danger me-2 px-4" data-bs-toggle="modal" data-bs-target="#modalEndSection" id="ES">End Section</button>`;
        }
        else{
            temps=`<button type="button" class="btn btn-primary ms-2 px-4" id="Next" onClick="nextclick()">Next</button>`;
        }
        if(num!=sectional_qnum[curr_sec][0])
            temps=`<button type="button" class="btn btn-outline-primary me-2" id="Prev" onClick="prevclick()">Back</button>`+temps;
        navbtn.innerHTML=temps;
    }*/
    let temps="";
    if(num!=sectional_qnum[curr_sec][0])
        temps+=`<button type="button" class="btn btn-outline-primary mx-1" id="Prev" onClick="prevclick()">Back</button>`;
    if(curr_sec!=secnum-1)
        temps+=`<button type="button" class="btn btn-danger px-4 mx-1" data-bs-toggle="modal" data-bs-target="#modalEndSection" id="ES">End Section</button>`;
    else
        temps+=`<button type="button" class="btn btn-danger px-4 mx-1" id="Submit" data-bs-toggle="modal" data-bs-target="#modalsubmit">Submit</button>`;
    if(num!=sectional_qnum[curr_sec][1])
        temps+=`<button type="button" class="btn btn-primary px-4 mx-1" id="Next" onClick="nextclick()">Next</button>`;
    mcq.innerHTML=str;
    navbtn.innerHTML=temps;
    if(response[`Q${qnum})`]){
        document.getElementById(response[`Q${qnum})`]).checked=true;
    }
    document.getElementById("scroller").scrollTop=0;    
}