import { Message } from 'discord.js';
import { inject, injectable } from 'inversify';
import TYPES from '../types';
import Trigger from './trigger';

@injectable()
export default class OneLiner {
  private readonly oneLiners: string[] = [
    'People say fish is good for a diet. But fish should never be cooked in butter. Fish should be cooked in its natural oils - Texaco, Mobil, Exxon...',
    'Acting deals with very delicate emotions. It is not putting up a mask. Each time an actor acts he does not hide; he exposes himself.',
    'Men who do things without being told draw the most wages.',
    "I bought a new Japanese car. I turned on the radio... I don't understand a word they're saying.",
    'I bought a perfect second car... a tow truck.',
    'I have three kids, one of each.',
    'I have nothing but troubles with my car. Every Sunday I take my family out for a push.',
    'Boy what a hotel that was. Why, they stole my towel!',
    "I was so depressed that I decided to jump from the tenth floor. They sent up a priest. He said, 'On your mark... '",
    'What a dog I got, he found out we look alike, so he killed himself.',
    'Oh, when I was a kid in show business I was poor. I used to go to orgies to eat the grapes.',
    'When I was a kid my parents moved a lot, but I always found them.',
    'I came from a real tough neighborhood. I bought a waterbed and found a guy at the bottom of it.',
    'I came from a real tough neighborhood. In the local restaurant, I sat down and had broken leg of lamb.',
    "I came from a real tough neighborhood. Why, every time I shut the window, I hurt somebody's fingers.",
    'I was so ugly my mother used to feed me with a sling shot.',
    'I had plenty of pimples as a kid. One day I fell asleep in the library. When I woke up, a blind man was reading my face.',
    'In the school I went to, they asked a kid to prove the law of gravity and he threw the teacher out of the window.',
    'I came from a real tough neighborhood. On my street, the kids take hubcaps… from moving cars.',
    "I came from a real tough neighborhood. Once, a guy pulled a knife on me. I knew he wasn't a professional; the knife had butter on it.",
    'My cousin is gay; in school while other kids were dissecting frogs, he was opening flies.',
    'My cousin is gay; he went to London only to find out that Big Ben was a clock.',
    "My cousin is gay; I always tell him that in our family tree, he's in the fruit section.",
    'I looked up my family tree and found three dogs using it.',
    'My kid wants to be a prison warden when he grows up so he can put thumb tacks on the electric chairs.',
    'One time my whole family played hide and seek. They found my mother in Pittsburgh!',
    "With my old man I got no respect. I asked him, 'How can I get my kite in the air?' He told me to run off a cliff.",
    "My old man, I told him I'm tired of running around in circles. So he nailed my other foot to the floor.",
    "When I was born, the doctor came out to the waiting room and said to my father, 'I'm very sorry. We did everything we could. But he pulled through.'",
    'I come from a stupid family. During the Civil War my great uncle fought for the West.',
    'I could tell that my parents hated me. My bath toys were a toaster and a radio.',
    'I come from a stupid family. My father worked in a bank. They caught him stealing pens.',
    'I looked up my family tree and found out I was the sap.',
    'When my old man wanted sex, my mother would show him a picture of me.',
    "I'm so ugly - my father carries around a picture of the kid who came with his wallet.",
    "Boy, is my wife stupid! It takes her an hour and a half to watch 60 minutes. My daughter's no bargain either. In public school she was voted most likely to conceive.",
    'Last year my birthday cake looked like a prairie fire.',
    "At twenty, a man is full of fight and hope. He wants to reform the world. When he is seventy, he still wants to reform the world, but he knows he can't.",
    "I told my psychiatrist that everyone hates me. He said I was being ridiculous… everyone hasn't met me yet.",
    'For two hours, some guy followed me around with a pooper scooper.',
    'The other night a mugger took off his mask and made me wear it.',
    'Last week I was walking by a cemetery, two guys came after me with shovels. It was all about money.',
    'A travel agent told I could spend seven nights in Hawaii… no days, just nights.',
    'Last week, my tie caught on fire; some guy tried to put it out with an axe.',
    'I met the surgeon general - he offered me a cigarette.',
    "I went to the doctor because I'd swallowed a bottle of sleeping pills. My doctor told me to have a few drinks and get some rest.",
    'My doctor told me to watch my drinking. Now I drink in front of a mirror. And I drink too much, way too much; my doctor drew blood - he ran a tab!',
    "I went to see my doctor. 'Doctor, every morning when I get up and look in the mirror... I feel like throwing up. What's wrong with me?' He said, 'I don't know but your eyesight is perfect.'",
    "Last week I told my psychiatrist, 'I keep thinking about suicide.' He told me from now on I have to pay in advance.",
    "I'm at the age where I want two girls. In case I fall asleep, they will have someone to talk to.",
    "My sex life is terrible; my wife put a mirror over the dog's bed. Actually she did put a mirror over our bed. She says she likes to watch herself laugh.",
    'The big difference between sex for money and sex for free is that sex for money usually costs a lot less.',
    "A girl phoned me the other day and said, 'Come on over, there's nobody home.' I went over. Nobody was home.",
    'During sex, my girlfriend always wants to talk to me. Just the other night she called me from a hotel.',
    'I once went out with this wild girl. She made French toast and got her tongue caught in the toaster.',
    'My wife only has sex with me for a purpose. Last night it was to time an egg.',
    "With girls, I don't think right. I had a date with one girl, she had mirrors all over her bedroom. She told me to come over and bring a bottle. I got Windex.",
    "I'm taking Viagra and drinking prune juice - I don't know if I'm coming or going.",
    "I got myself good this morning too. I did my pushups in the nude; I didn't see the mouse trap.",
    'I know the best way to get girls. I hang out at prisons and wait for parolees.',
    "I asked my wife if she enjoys a cigarette after sex and she said, 'No, one drag is enough.'",
    'I saved a girl from being attacked last night. I controlled myself.',
    "I'm a bad lover. I once caught a peeping tom booing me.",
    'My problem is that I appeal to everyone that can do me absolutely no good.',
    'One year they asked me to be poster boy - for birth control.',
    "You wanna have laughs? Do what I do. When I go through a tollbooth, I keep going. I tell the guy, 'The car behind me is paying for two.'",
    'I found there was only one way to look thin: hang out with fat people.',
    "My psychiatrist told me I was crazy and I said I want a second opinion. He said, 'okay, you're ugly too.'",
    "I'm so ugly... I worked in a pet shop, and people kept asking how big I'd get.",
    'I was such an ugly kid… when I played in the sandbox, the cat kept covering me up.',
    'I get no respect. The way my luck is running, if I was a politician, I would be honest.',
    'I went to a freak show and they let me in for nothing.',
    "I had a good time last week. I did a show; the whole audience was midgets. I got a standing ovation - I didn't even know it!",
    'Oh, last week was a rough week. I noticed my gums were shrinking. I was brushing my teeth with Preparation H.',
    'I drink too much. The last time I gave a urine sample it had an olive in it.',
    'This morning, when I put on my underwear, I could hear the Fruit-of-the-Loom guys laughing at me.',
    'My wife has to be the worst cook. Her specialty is indigestion.',
    "One day as I came home early from work... I saw a guy jogging naked. I said to the guy, 'Hey buddy, why are you doing that?' He said, 'Because you came home early.'",
    'My wife made me join a bridge club. I jump off next Tuesday.',
    "I haven't spoken to my wife in years. I didn't want to interrupt her.",
    "Once, somebody stole our car. I asked my wife if she saw who it was. She said, 'No, but I did get the license number.'",
    "With my wife, I don't get no respect. I made a toast on her birthday to 'the best woman a man ever had.' The waiter joined me.",
    "My wife had her driver's test the other day. She got 8 out of 10. The other 2 guys jumped clear.",
    "I asked him, 'Who said you could fool around with my wife?' He said, 'Everybody.'",
    "I'll tell you one thing, I know how to satisfy my wife in bed. Yeah, I leave.",
    'I told my wife the truth. I told her I was seeing a psychiatrist. Then she told me the truth: that she was seeing a psychiatrist, two plumbers, and a bartender.',
    "My wife's not too smart. I told her our kids were spoiled. She said, 'All kids smell that way.'",
    "My wife has to be the worst cook. I've got the only dog who begs for Alka-Seltzer.",
    "There's only one thing wrong with my wife's face - it shows.",
    "…went to a bar for a few drinks. The bartender asked what I wanted. 'Surprise me,' I said. So he showed me a naked picture of my wife.",
    "My wife has to be the worst cook. I don't believe meatloaf should glow in the dark.",
    'My wife has to be the worst cook. In my house, we pray after we eat.',
    'I have good looking kids. Thank goodness my wife cheats on me.',
    "I went to look for a used car and found my wife's dress in the back seat.",
    'I remember one guy gave her a good piece of his mind. Yeah, it was right after she took a good piece of his leg.',
    'My marriage is on the rocks again. Yeah, my wife just broke up with her boyfriend.',
    "My wife's a great driver; she once hit a deer. It was in a zoo. There is a pair of shoes on the dashboard. They belong to the last guy she hit.",
    "My wife was afraid of the dark… then she saw me naked and now she's afraid of the light.",
    'Why, her cooking is so bad that the flies pitched in to fix the screen door. I leave dental floss in the kitchen and watch the roaches hang themselves.'
  ];

  private trigger: Trigger;

  constructor(@inject(TYPES.Trigger) trigger: Trigger) {
    this.trigger = trigger;
  }

  private randomOneLiner(): string {
    return this.oneLiners[Math.floor(Math.random() * this.oneLiners.length)];
  }

  public handle(message: Message): Promise<Message | Message[]> {
    if (this.trigger.isTrigger(message.content)) {
      return message.reply(this.randomOneLiner());
    }
    return Promise.reject();
  }
}
