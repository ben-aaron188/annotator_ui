var instructions_base = [{
  id: 1,
  text: 'instruction1',
  html: '<p>Identifying lies and truths in written text</br></br>In this study, you will read statements written by other participants and will assess whether they are truthful or fabricated.</p>'
}, {
  id: 2,
  text: 'instruction2',
  html: '<center>Informed consent</center></br></br>By proceeding, you agree to participating after reading the information below.</br></br>Before you participate in this study, it is important that you know what the procedure of this study is. Please read the text below carefully and do not hesitate to ask for clarification if some parts are unclear to you. The experimenter is happy to answer any questions.</br></br>Aim of this research</br>This study aims to test whether we can differentiate truthful from deceptive statements about an upcoming event. To achieve this, we ask the participants to give a statement about the most important leisure activity for them in the upcoming week.</br></br>Procedure of this experiment</br>You will be instructed to either tell the truth about your most important activity or to lie about. We randomly allocated participants to these two groups. If you are instructed to lie, we will assign you an activity that you have to pretend to be doing. Be as convincing as possible in your answer. This experiment takes circa 5 minutes for which you receive GBP 0.60.</br></br>Voluntary basis</br>If you decide to refrain from taking part in this research, this will have no consequences to you whatsoever. If you decide to stop during the research, this is possible at any time without providing additional explanation, and without consequence. You will have the right to ask for withdrawal of your participation data up to 7 days after the study took place.</br></br>Insurance</br>As with all studies, the University of Amsterdam provides a basic liability insurance.</br></br>Privacy</br>Your data will be reviewed by the researchers listed below. In addition, your answers will be used for academic research purposes to determine how difficult it is to identify whether someone lied or told the truth. If this study may lead to a publication, the data will be published anonymously, and will thus be untraceable to individual participants. An anonymized dataset may be shared with other researchers for scientific purposes. Your privacy is guaranteed due to the fact that we will not share your personal information without personal confirmation.</br></br>If you have questions regarding this study, before or after, you may contact the responsible researcher; Dr B. Verschuere (phone: +31205256799, email: b.j.verschuere@uva.nl; University of Amsterdam, Roeterseilandcampus building G, room 1.31). If you have any formal complaints, please contact the member of the Faculty Ethics Committee (FMG) at the University of Amsterdam; Dr A. van Emmerik (phone: +20 525 8604; email: a.a.p.vanemmerik@uva.nl, Roeterseilandcampus building G, room 1.41).</br></br>Click on "next" to participate and confirm the above and below:<ul><li>I am 16 years of age or older</li><li>I have read and understood the information</li><li>I consent to participation in the study and the use of the gathered data</li><li>I retain the right to withdraw from the study at any time</li><li>I retain the right to withdraw my consent of using the gathered data</li></ul>'
}, {
  id: 3,
  text: 'instruction3',
  html: '<p></p>'
}, {
  id: 4,
  text: 'instruction4',
  html: '<p>We asked some participants to provide a truthful statement about their most important activity in the next 7 days, and some participants to lie and make up such a statement.</p>'
}];

var instructions_normal = [{
  id: 1,
  text: 'instruction1',
  html: '<p>Identifying lies and truths in written text</br></br>In this study, you will read statements written by other participants and will assess whether they are truthful or fabricated.</p>'
}, {
  id: 2,
  text: 'instruction2',
  html: '<center>Informed consent</center></br></br>By proceeding, you agree to participating after reading the information below.</br></br>Before you participate in this study, it is important that you know what the procedure of this study is. Please read the text below carefully and do not hesitate to ask for clarification if some parts are unclear to you. The experimenter is happy to answer any questions.</br></br>Aim of this research</br>This study aims to test whether we can differentiate truthful from deceptive statements about an upcoming event. To achieve this, we ask the participants to give a statement about the most important leisure activity for them in the upcoming week.</br></br>Procedure of this experiment</br>You will be instructed to either tell the truth about your most important activity or to lie about. We randomly allocated participants to these two groups. If you are instructed to lie, we will assign you an activity that you have to pretend to be doing. Be as convincing as possible in your answer. This experiment takes circa 5 minutes for which you receive GBP 0.60.</br></br>Voluntary basis</br>If you decide to refrain from taking part in this research, this will have no consequences to you whatsoever. If you decide to stop during the research, this is possible at any time without providing additional explanation, and without consequence. You will have the right to ask for withdrawal of your participation data up to 7 days after the study took place.</br></br>Insurance</br>As with all studies, the University of Amsterdam provides a basic liability insurance.</br></br>Privacy</br>Your data will be reviewed by the researchers listed below. In addition, your answers will be used for academic research purposes to determine how difficult it is to identify whether someone lied or told the truth. If this study may lead to a publication, the data will be published anonymously, and will thus be untraceable to individual participants. An anonymized dataset may be shared with other researchers for scientific purposes. Your privacy is guaranteed due to the fact that we will not share your personal information without personal confirmation.</br></br>If you have questions regarding this study, before or after, you may contact the responsible researcher; Dr B. Verschuere (phone: +31205256799, email: b.j.verschuere@uva.nl; University of Amsterdam, Roeterseilandcampus building G, room 1.31). If you have any formal complaints, please contact the member of the Faculty Ethics Committee (FMG) at the University of Amsterdam; Dr A. van Emmerik (phone: +20 525 8604; email: a.a.p.vanemmerik@uva.nl, Roeterseilandcampus building G, room 1.41).</br></br>Click on "next" to participate and confirm the above and below:<ul><li>I am 16 years of age or older</li><li>I have read and understood the information</li><li>I consent to participation in the study and the use of the gathered data</li><li>I retain the right to withdraw from the study at any time</li><li>I retain the right to withdraw my consent of using the gathered data</li></ul>'
}, {
  id: 3,
  text: 'instruction3',
  html: '<p></p>'
}, {
  id: 4,
  text: 'instruction4',
  html: '<p>We asked some participants to provide a truthful statement about their most important activity in the next 7 days, and some participants to lie and make up such a statement.</p>'
}, {
  id: 5,
  text: 'instruction5',
  html: '<p>Your task is to read these statements and to identify which ones are truthful and which are deceptive.</p>'
}, {
  id: 6,
  text: 'instruction6',
  html: '<p>Please indicate your judgment as follows:</p><ul><li>below each statement you will see a slider with values from 0 (= certainly truthful) to 100 (= certainly deceptive)</li><li>use the slider to indicate how truthful or deceptive you think the statement is</li><li>values on the left = you judge a statement to be more truthful</li><li>values on the right = you judge the statement to be more deceptive</li><li>the slider is set by default to a neutral point of 50 (i.e. indecisive between truthful and deceptive)</li><li>move the slider to the left if you think the statements is more likely to be truthful, move the slider to the right to indicate you think the statements is more likely to be deceptive</li><li>the more you move the slider to the extremes, the more certainty you indicate with your judgment (i.e. values closer to the middle suggest that you are less certain of your judgment)</li></ul>'
}, {
  id: 7,
  text: 'instruction7',
  html: '<p>Reward: Deception detection is difficult.</br>Take your time in reading the statements and making your judgment. In total, you will judge 5 brief statements.</br>We will pay you 25p extra as a bonus per statement if you make the judgment more accurate.</br>This means you can earn an additional GBP 1.25 for performing well on this task.</p>'
}, {
  id: 8,
  text: 'check1',
  html: '<p>As a check: What are your task instructions?</p><form action=""><input id="mcheck1" type="radio" name="check1" value="0">estimate the truthfulness/deception of statements with a slider<br><input type="radio" name="check1" value="1">adjust a previous AI judgment using the full range of values<br><input type="radio" name="check1" value="2">adjust a previous AI judgment with a slider by max. plus/minus 10 points</form>'
}, {
  id: 9,
  text: 'check2',
  html: '<p>As a check: How was the slider starting point determined?</p><form action=""><input id="mcheck2" type="radio" name="check2" value="0">it was set to a neutral midpoint<br><input type="radio" name="check2" value="1">based on judgment of an artificial intelligence programme<br><input type="radio" name="check2" value="2">by chance in a random position</form>'
}, {
  id: 10,
  text: 'instruction8',
  html: '<p>We start with two practice statements.</br></br>You will see that the button to proceed becomes inactive if your judgment is not within the allowed boundary.</p>'
}, {
  id: 11,
  text: 'Practice 1',
  html: '<p>Practice 1:</br></brAdjust the slider value to indicate a highly deceptive judgment.</br></br>The box with "Judgment" shows you the current slider value and adjusts itself according to your own judgment.</p>'
}, {
  id: 12,
  text: 'Practice 2',
  html: '<p>Practice 2: Adjust the slider value to indicate a highly truthful judgment.</p>'
}, {
  id: 13,
  text: 'start task',
  html: '<p>You can now start rating the actual statements.</br></br>Remember: you can earn 25p per statement as a bonus if you make it more accurate. The bonus will be paid to your prolific account within 2 weeks.</p>'
}, {
  id: 14,
  text: 'strategy',
  html: '<p>We are interested to learn from your strategy in making a truth vs lie decision.</br></br>How did you make the judgment on the five statements you just rated?</br></br><textarea id="strategy_input" rows="10" cols="50"></textarea></p>'
}, {
  id: 15,
  text: 'prolificid',
  html: '<p>Thanks for participating.</br></br>Please confirm your participation with your Prolific participant ID:</br></br><input id="prolific_input" size="50"></input></br></br></br>You will now be redirected to Prolific.</p>'
}, {
  id: 16,
  text: 'This is not correct. Your task is indicate how truthful or deceptive you think the statements are by moving the slider. Please keep this in mind for a valid participation.',
  html: '<p></p>'
}, {
  id: 17,
  text: 'This is not correct. The default judgment reflects the neutral midpoint. Please keep this in mind for a valid participation.',
  html: '<p></p>'
}, {
  id: 18,
  text: 'This is not quite correct. To indicate a highly deceptive statement, move the slider to the right slide of the range.',
  html: '<p></p>'
}, {
  id: 19,
  text: 'This is not quite correct. To indicate a highly truthful statement, move the slider to the left slide of the range.',
  html: '<p></p>'
}];

var instructions_full = [{
  id: 1,
  text: 'instruction1',
  html: '<p>Identifying lies and truths in written text</br></br>In this study, you will read statements written by other participants and will assess whether they are truthful or fabricated.</p>'
}, {
  id: 2,
  text: 'instruction2',
  html: '<center>Informed consent</center></br></br>By proceeding, you agree to participating after reading the information below.</br></br>Before you participate in this study, it is important that you know what the procedure of this study is. Please read the text below carefully and do not hesitate to ask for clarification if some parts are unclear to you. The experimenter is happy to answer any questions.</br></br>Aim of this research</br>This study aims to test whether we can differentiate truthful from deceptive statements about an upcoming event. To achieve this, we ask the participants to give a statement about the most important leisure activity for them in the upcoming week.</br></br>Procedure of this experiment</br>You will be instructed to either tell the truth about your most important activity or to lie about. We randomly allocated participants to these two groups. If you are instructed to lie, we will assign you an activity that you have to pretend to be doing. Be as convincing as possible in your answer. This experiment takes circa 5 minutes for which you receive GBP 0.60.</br></br>Voluntary basis</br>If you decide to refrain from taking part in this research, this will have no consequences to you whatsoever. If you decide to stop during the research, this is possible at any time without providing additional explanation, and without consequence. You will have the right to ask for withdrawal of your participation data up to 7 days after the study took place.</br></br>Insurance</br>As with all studies, the University of Amsterdam provides a basic liability insurance.</br></br>Privacy</br>Your data will be reviewed by the researchers listed below. In addition, your answers will be used for academic research purposes to determine how difficult it is to identify whether someone lied or told the truth. If this study may lead to a publication, the data will be published anonymously, and will thus be untraceable to individual participants. An anonymized dataset may be shared with other researchers for scientific purposes. Your privacy is guaranteed due to the fact that we will not share your personal information without personal confirmation.</br></br>If you have questions regarding this study, before or after, you may contact the responsible researcher; Dr B. Verschuere (phone: +31205256799, email: b.j.verschuere@uva.nl; University of Amsterdam, Roeterseilandcampus building G, room 1.31). If you have any formal complaints, please contact the member of the Faculty Ethics Committee (FMG) at the University of Amsterdam; Dr A. van Emmerik (phone: +20 525 8604; email: a.a.p.vanemmerik@uva.nl, Roeterseilandcampus building G, room 1.41).</br></br>Click on "next" to participate and confirm the above and below:<ul><li>I am 16 years of age or older</li><li>I have read and understood the information</li><li>I consent to participation in the study and the use of the gathered data</li><li>I retain the right to withdraw from the study at any time</li><li>I retain the right to withdraw my consent of using the gathered data</li></ul>'
}, {
  id: 3,
  text: 'instruction3',
  html: '<p></p>'
}, {
  id: 4,
  text: 'instruction4',
  html: '<p>We asked some participants to provide a truthful statement about their most important activity in the next 7 days, and some participants to lie and make up such a statement.</p>'
}, {
  id: 5,
  text: 'instruction5',
  html: '<p>Your task is to read these statements and to identify which ones are truthful and which are deceptive.</p>'
}, {
  id: 6,
  text: 'instruction6',
  html: '<p>Please indicate your judgment as follows:</p><ul><li>below each statement you will see a slider with values from 0 (= certainly truthful) to 100 (= certainly deceptive)</li><li>use the slider to indicate how truthful or deceptive you think the statement is</li><li>values on the left = you judge a statement to be more truthful</li><li>values on the right = you judge the statement to be more deceptive</li></ul>You will see that the slider is set by default at a specific judgment. This point reflects the judgment of an artificial intelligence (AI) programme that was trained on some statements and then judged the truthfulness of the statements you are about to read.<ul><li>adjust the AI judgment by moving the slider</li><li>you can make use of the full range of values</li><li>move the slider to the left if you think the statements is more likely to be truthful, move the slider to the right to indicate you think the statements is more likely to be deceptive</li><li>the more you move the slider to the extremes, the more certainty you indicate with your judgment (i.e. values closer to the middle suggest that you are less certain of your judgment)</li></ul>'
}, {
  id: 7,
  text: 'instruction7',
  html: '<p>Reward: Deception detection is difficult.</br>Take your time in reading the statements and making your judgment. In total, you will judge 5 brief statements.</br>We will pay you 25p extra as a bonus per statement if you make the judgment more accurate.</br>This means you can earn an additional GBP 1.25 for performing well on this task.</p>'
}, {
  id: 8,
  text: 'check1',
  html: '<p>As a check: What are your task instructions?</p><form action=""><input id="mcheck1" type="radio" name="check1" value="0">estimate the truthfulness/deception of statements with a slider<br><input type="radio" name="check1" value="1">adjust a previous AI judgment using the full range of values<br><input type="radio" name="check1" value="2">adjust a previous AI judgment with a slider by max. plus/minus 10 points</form>'
}, {
  id: 9,
  text: 'check2',
  html: '<p>As a check: How was the slider starting point determined?</p><form action=""><input id="mcheck2" type="radio" name="check2" value="0">it was set to a neutral midpoint<br><input type="radio" name="check2" value="1">based on judgment of an artificial intelligence programme<br><input type="radio" name="check2" value="2">by chance in a random position</form>'
}, {
  id: 10,
  text: 'instruction8',
  html: '<p>We start with two practice statements.</p>'
}, {
  id: 11,
  text: 'Practice 1',
  html: '<p>Practice 1:</br></brAdjust the slider value to indicate a highly deceptive judgment.</br></br>The box with "Judgment" shows you the current slider value and adjusts itself according to your own judgment.</p>'
}, {
  id: 12,
  text: 'Practice 2',
  html: '<p>Practice 2:</br></brAdjust the slider value to indicate a highly truthful judgment.</p>'
}, {
  id: 13,
  text: 'start task',
  html: '<p>You can now start rating the actual statements.</br></br>Remember: you can earn 25p per statement as a bonus if you make it more accurate. The bonus will be paid to your prolific account within 2 weeks.</p>'
}, {
  id: 14,
  text: 'strategy',
  html: '<p>We are interested to learn from your strategy in making a truth vs lie decision.</br></br>How did you make the judgment on the five statements you just rated?</br></br><textarea id="strategy_input" rows="10" cols="50"></textarea></p>'
}, {
  id: 15,
  text: 'prolificid',
  html: '<p>Thanks for participating.</br></br>Please confirm your participation with your Prolific participant ID:</br></br><input id="prolific_input" size="50"></input></br></br></br>You will now be redirected to Prolific.</p>'
}, {
  id: 16,
  text: 'This is not correct. Your task is to adjust the AI judgment using the full slider range. Please keep this in mind for a valid participation.',
  html: '<p></p>'
}, {
  id: 17,
  text: 'This is not correct. The default judgment reflects the judgment of an artificial intelligence (AI) programme. Please keep this in mind for a valid participation.',
  html: '<p></p>'
}, {
  id: 18,
  text: 'This is not quite correct. To indicate a highly deceptive statement, move the slider to the right slide of the range.',
  html: '<p></p>'
}, {
  id: 19,
  text: 'This is not quite correct. To indicate a highly truthful statement, move the slider to the left slide of the range.',
  html: '<p></p>'
}];

var instructions_partial = [{
  id: 1,
  text: 'instruction1',
  html: '<p>Identifying lies and truths in written text</br></br>In this study, you will read statements written by other participants and will assess whether they are truthful or fabricated.</p>'
}, {
  id: 2,
  text: 'instruction2',
  html: '<center>Informed consent</center></br></br>By proceeding, you agree to participating after reading the information below.</br></br>Before you participate in this study, it is important that you know what the procedure of this study is. Please read the text below carefully and do not hesitate to ask for clarification if some parts are unclear to you. The experimenter is happy to answer any questions.</br></br>Aim of this research</br>This study aims to test whether we can differentiate truthful from deceptive statements about an upcoming event. To achieve this, we ask the participants to give a statement about the most important leisure activity for them in the upcoming week.</br></br>Procedure of this experiment</br>You will be instructed to either tell the truth about your most important activity or to lie about. We randomly allocated participants to these two groups. If you are instructed to lie, we will assign you an activity that you have to pretend to be doing. Be as convincing as possible in your answer. This experiment takes circa 5 minutes for which you receive GBP 0.60.</br></br>Voluntary basis</br>If you decide to refrain from taking part in this research, this will have no consequences to you whatsoever. If you decide to stop during the research, this is possible at any time without providing additional explanation, and without consequence. You will have the right to ask for withdrawal of your participation data up to 7 days after the study took place.</br></br>Insurance</br>As with all studies, the University of Amsterdam provides a basic liability insurance.</br></br>Privacy</br>Your data will be reviewed by the researchers listed below. In addition, your answers will be used for academic research purposes to determine how difficult it is to identify whether someone lied or told the truth. If this study may lead to a publication, the data will be published anonymously, and will thus be untraceable to individual participants. An anonymized dataset may be shared with other researchers for scientific purposes. Your privacy is guaranteed due to the fact that we will not share your personal information without personal confirmation.</br></br>If you have questions regarding this study, before or after, you may contact the responsible researcher; Dr B. Verschuere (phone: +31205256799, email: b.j.verschuere@uva.nl; University of Amsterdam, Roeterseilandcampus building G, room 1.31). If you have any formal complaints, please contact the member of the Faculty Ethics Committee (FMG) at the University of Amsterdam; Dr A. van Emmerik (phone: +20 525 8604; email: a.a.p.vanemmerik@uva.nl, Roeterseilandcampus building G, room 1.41).</br></br>Click on "next" to participate and confirm the above and below:<ul><li>I am 16 years of age or older</li><li>I have read and understood the information</li><li>I consent to participation in the study and the use of the gathered data</li><li>I retain the right to withdraw from the study at any time</li><li>I retain the right to withdraw my consent of using the gathered data</li></ul>'
}, {
  id: 3,
  text: 'instruction3',
  html: '<p></p>'
}, {
  id: 4,
  text: 'instruction4',
  html: '<p>We asked some participants to provide a truthful statement about their most important activity in the next 7 days, and some participants to lie and make up such a statement.</p>'
}, {
  id: 5,
  text: 'instruction5',
  html: '<p>Your task is to read these statements and to identify which ones are truthful and which are deceptive.</p>'
}, {
  id: 6,
  text: 'instruction6',
  html: '<p>Please indicate your judgment as follows:</p><ul><li>below each statement you will see a slider with values from 0 (= certainly truthful) to 100 (= certainly deceptive)</li><li>use the slider to indicate how truthful or deceptive you think the statement is</li><li>values on the left = you judge a statement to be more truthful</li><li>values on the right = you judge the statement to be more deceptive</li></ul>You will see that the slider is set by default at a specific judgment. This point reflects the judgment of an artificial intelligence (AI) programme that was trained on some statements and then judged the truthfulness of the statements you are about to read.<ul><li>adjust the AI judgment by moving the slider</li><li>you are allowed to adjust the AI judgment up to 10 points to the left or right</li><li>the green area shows you the allowed region in which you make a valid judgment</li><li>move the slider to the left if you think the statements is more likely to be truthful, move the slider to the right to indicate you think the statements is more likely to be deceptive</li><li>the more you move the slider to the extremes, the more certainty you indicate with your judgment (i.e. values closer to the middle suggest that you are less certain of your judgment)</li></ul>'
}, {
  id: 7,
  text: 'instruction7',
  html: '<p>Reward: Deception detection is difficult.</br>Take your time in reading the statements and making your judgment. In total, you will judge 5 brief statements.</br>We will pay you 25p extra as a bonus per statement if you make the judgment more accurate.</br>This means you can earn an additional GBP 1.25 for performing well on this task.</p>'
}, {
  id: 8,
  text: 'check1',
  html: '<p>As a check: What are your task instructions?</p><form action=""><input id="mcheck1" type="radio" name="check1" value="0">estimate the truthfulness/deception of statements with a slider<br><input type="radio" name="check1" value="1">adjust a previous AI judgment using the full range of values<br><input type="radio" name="check1" value="2">adjust a previous AI judgment with a slider by max. plus/minus 10 points</form>'
}, {
  id: 9,
  text: 'check2',
  html: '<p>As a check: How was the slider starting point determined?</p><form action=""><input id="mcheck2" type="radio" name="check2" value="0">it was set to a neutral midpoint<br><input type="radio" name="check2" value="1">based on judgment of an artificial intelligence programme<br><input type="radio" name="check2" value="2">by chance in a random position</form>'
}, {
  id: 10,
  text: 'instruction8',
  html: '<p>We start with two practice statements.</br></br>You will see that the button to proceed becomes inactive if your judgment is not within the allowed boundary.</p>'
}, {
  id: 11,
  text: 'Practice 1',
  html: '<p>Practice 1:</br></br>Adjust the slider value within the allowed boundary towards a more deceptive judgment.</br></br>The box with "Judgment" shows you the current slider value and adjusts itself according to your own judgment.</p>'
}, {
  id: 12,
  text: 'Practice 2',
  html: '<p>Practice 2:</br></br>Adjust the slider value within the allowed boundary towards a more truthful judgment.</p>'
}, {
  id: 13,
  text: 'start task',
  html: '<p>You can now start rating the actual statements.</br></br>Remember: you can earn 25p per statement as a bonus if you make it more accurate. The bonus will be paid to your prolific account within 2 weeks.</p>'
}, {
  id: 14,
  text: 'strategy',
  html: '<p>We are interested to learn from your strategy in making a truth vs lie decision.</br></br>How did you make the judgment on the five statements you just rated?</br></br><textarea id="strategy_input" rows="10" cols="50"></textarea></p>'
}, {
  id: 15,
  text: 'prolificid',
  html: '<p>Thanks for participating.</br></br>Please confirm your participation with your Prolific participant ID:</br></br><input id="prolific_input" size="50"></input></br></br></br>You will now be redirected to Prolific.</p>'
}, {
  id: 16,
  text: 'This is not correct. Your task is to adjust the AI judgment up to 10 points to the left or right. Please keep this in mind for a valid participation.',
  html: '<p></p>'
}, {
  id: 17,
  text: 'This is not correct. The default judgment reflects the judgment of an artificial intelligence (AI) programme. Please keep this in mind for a valid participation.',
  html: '<p></p>'
}, {
  id: 18,
  text: 'This is not quite correct. To indicate a more deceptive statement, move the slider to the right slide of the allowed boundary range.',
  html: '<p></p>'
}, {
  id: 19,
  text: 'This is not quite correct. To indicate a more truthful statement, move the slider to the left slide of the allowed boundary range.',
  html: '<p></p>'
}];
