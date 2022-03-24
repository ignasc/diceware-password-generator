# BUILDING STILL IN PROGRESS

# CREDITS

Thanks to [eff.org](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases) for the word list.

# QUICK INFO
I created this tool as a little project to show off on my portfolio.

# SOME THOUGHTS FROM ME

## Purpose of this tool
The main purpose of this tool is to demonstrate my skills in web development. I have started learning computer programming in my free time and, although it is a very simple and basic page with some Javascript, I am proud of it as it is the first little project that I have done from scratch by myself.

## Structure of the program
The structure is very simple: main HTML file to load the page, single Javascript file to do all the calculations, single Javascript that holds the word list and css files for visual design.

The original word list, presented in a txt file has been reformated from *number word* format into that which suits my algorithm. I have used excel to quickly add necesary symbols and concatinate everything into an array, where each number and word pair is another array:

*
\[
\[x0,y0\],
\[x1,y1\],
\.\.\.
\]
x \- diceroll digit
y \- word for password, assigned to that digit
*

The initial build (at the time of writing this document) is without any libraries, but I may add some more functionality in the future.

## My Personal Thoughts
I used to use different passwords for websites, that were created using certain algorithm. This way I only had to remember the algorithm and I could reconstruct the password in my head from the website address. This was all working well, but had few disadvantages:
* Sites that required to regularly change password, forced me to add passwords, different from algorithm.
* If a site/app was bought or changed it's name somehow - that messed up my password again.

Eventually I switched to a password manager with a single master password and now I don't really care about websites, I just generate a long, random gibberish for each website. People say, that it is risky, because if someone finds out my master password, they will get to all my passwords. Well, my answer to that is regardless which method you pick - there is a "master access risk" to all of them:
* *Algorithm* - if one password is guessed, bad guys can reverse engineer all the other ones based on patterns in the compromised password. This means that any of your passwords are risky, because they can help someone figure out all the other ones.
* *Password manager* - already mentioned - master password can be guessed. Unlike the above, where any password can compromise your all websites, if website gets hacked and one of the password manager generated passwords is found out - it will not have any relation to other passwords and therefore does not compromise your other accounts.
* *Storing passwords in a notepad* - someone might look at it. Unless you live underground, got no friends. Then it might be a relatively safe options.
* At the end of the day, we use the same email address for account registration, email password becomes kind of like a master password. If that one is cracked, then all others can be figured out by using password reminder options on websites.

My personal advice for those, who want to generate diceware password: roll the actual dice or find another way to generate numbers 1-6 in a relatively random way and pick those words manually from the list - this way you are not exposing your generated password to anyone. You can also just come up with words that have no logical sense between them:
* NOT a great example - **TwoMenTalkingTogether** - creates a sentence that makes a logical sense: men are having conversation. I have read that there are word attack dictionaries that rely on people making meaningful sentences to make it easier to remember.
* BETTER example - **QuantumChickenEatsEngine** - have you ever seen or even thought about a quantum chicken, that eats an engine? Me neither. Alright, ChickenEats does make sense. So change that part: **QuantumChickenShootsEngine**.
* The password above can be guessed using word dictionary attack, although it will take a long time. Make dictionary attack useless by adding extra symbols, especially within the words, like **Quantum_ChickenShootsEngine** or **Quan_tumChickenShootsEngine**.
* At the end of the day, if your mother tongue is not english, translate it to your own language if words are long enough: **Kvan_tinisVisciukasSaudoVarikli** or if your language has specific symbols: **Kvan_tinisViščiukasŠaudoVariklį**. Good luck cracking this one...

# DISCLAIMER
Although the diceware generated password is considered to be secure (with sufficient number of words), use this tool at your own risk. Never use a password that has been generated on a website (yes, my site included) for your accounts, as the website may store it and thus compromise the security of the password.
