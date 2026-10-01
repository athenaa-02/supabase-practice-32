import Test from "./Test.jsx";
import Practice from "./Practice.tsx";

function App() {
//   let text = "fsagddsfdskjhfds";

//   // Math.floor(text)

//   let person = ["გია", 30];

//   // person[1].toUpperCase()
//   interface User {
//     name: string;
//     age: number;
//   }

//   let user: User = {
//     name: "თამარ",
//     age: 22,
//   };

//   let age: number;

//   let something: unknown;

//   something = 876876;

//   // Math.floor(something)

//   function log(): void {
//     // console.log("Hello");
//     throw 546;
//     if (user.age > 0) {
//       // console.log("works");
//     }
//     // console.log("sjgd");
//     return "shbhg";
//   }

//   // log()

//   function throwError(message: string): never {
//     throw new Error(message);
//   }

//   function validateAge(age: number): number {
//     if (age < 0) {
//       throwError("ასაკი ვერ იქნება უარყოფითი");
//       // TypeScript იცის, რომ აქედან ქვემოთ არაფერი შესრულდება
//     }
//     return age;
//   }

//   try {
//     const result = validateAge(-3);
//     // console.log(result);
//   } catch (error) {
//     // alert(error);
//   }

//   function getId(id: string | number | undefined) {
//     if (!id) {
//       // console.log("id doesnt exist ");
//       return "error";
//     } else {
//       if (typeof id === "string") {
//         // console.log(id.toUpperCase());
//       } else if (typeof id === "number") {
//         // console.log(id.toFixed(4));
//       }
//     }
//   }

//   getId(undefined);
//   getId("dshj");
//   getId(4765.438878);

//   enum Color {
//     Red,
//     Green,
//     Blue,
//   }
//   let c: Color = Color.Green;
//   let red: Color = Color.Red;
//   // console.log(red)

//   // console.log(c)

//   class User {
//     name: string;
//     protected password: string;

//     constructor(username: string, pass: string) {
//       this.name = username;
//       this.password = pass;
//     }

//     private checkPasswordForName() {
//       if (this.password.includes(this.name)) {
//         alert("პაროლში არ გამოიყენოთ თქვენი სახელი");
//       } else {
//         // alert('თქვენი პაროლი ვალიდურია')
//       }
//     }

//     callCheckPasswords() {
//       this.checkPasswordForName();
//     }
//   }

//   const user1 = new User("natia", "natia");
//   const user2 = new User("taso", "234");

//   console.log(user1);
//   // console.log(user2)

//   class Admin extends User {
//     deletePost() {
//       console.log("წარმატებით წაიშალა");
//       console.log(this.password);
//     }
//   }

//   const admin = new Admin("magda", "magdamagda");

//   console.log(admin.password);

//   class Character {
//     #health: number;
//     protected level: number;
//     public name: string;

//     constructor(name: string, health: number, level: number) {
//       this.name = name;
//       this.#health = health;
//       this.level = level;
//     }

//     public takeDamage(amount: number): void {
//       this.#health -= amount;
//       if (this.#health <= 0) {
//         console.log(`${this.name} has fallen!`);
//       }
//     }

//     public getHealth(): number {
//       return this.#health; // 🐛 something's wrong here
//     }

//     protected levelUp(): void {
//       this.level++;
//       console.log(`${this.name} is now level ${this.level}!`);
//     }
//   }

//   class Warrior extends Character {
//     private rage: number = 0;

//     constructor(name: string, health: number, level: number) {
//       // 🐛 something's missing here
//       super(name, health, level);
//       this.rage = 0;
//     }

//     public gainRage(amount: number): void {
//       this.rage += amount;
//       if (this.rage >= 100) {
//         this.levelUp();
//         this.rage = 0;
//       }
//     }

//     public showStatus(): void {
//       // 🐛 one of these two lines is not like the other
//       console.log(`${this.name} - Level ${this.level} - Rage: ${this.rage}`);
//       console.log(`Health: ${this.getHealth()}`);
//     }
//   }

//   const hero = new Warrior("Aria", 100, 1);
//   hero.takeDamage(30);
//   hero.gainRage(120);
//   hero.showStatus();

//   // 🐛 two more bugs are down here — try running these lines
//   console.log(hero.getHealth());
//   console.log(hero.gainRage(0));

//   interface CharacterForm {
//     readonly name: string;
//     skin: string;
//     skills: Array<string>;

//     getScore: () => number;
//     addScore: () => number;
//     decreaseScore: () => number;
//     changeSkin: (newSkin:string) => string;
//     addSkills: (skill:string) => Array<string>;
//   }

//   class GameCharacter implements CharacterForm {
//    readonly name: string;
//     #score: number;
//     #hearts: number;
//     skin: string;
//     skills: Array<string>;

//     constructor(
//       name: string,
//       score: number,
//       hearts: number,
//       skin: string,
//       skills: Array<string>,
//     ) {
//       this.name = name;
//       this.#score = score;
//       this.#hearts = hearts;
//       this.skin = skin;
//       this.skills = skills;
//     }

//     getScore = () => {
//       console.log(`this is score ${this.#score}`);
//       return this.#score;
//     };
//     addScore = () => {
//       console.log((this.#score = this.#score + 1));
//       return (this.#score += 1);
//     };
//     decreaseScore = () => {
//       console.log((this.#score = this.#score - 1));
//       return (this.#score -= 1);
//     };
//     changeSkin = (newSkin:string) => {
//       this.skin = newSkin
//       return this.skin
//     };
//     addSkills = (skill: string) => {
//       this.skills.push(skill);
//       this.addScore()
//       return this.skills;

//     };

//   }

//   const spiderman = new GameCharacter("spiderman", 0, 100, 'spider.png', ['push', 'speed']);


// console.log(spiderman)
// spiderman.addScore()

// spiderman.addSkills('web shoot')
// spiderman.addSkills('web shoot')
// spiderman.changeSkin('goblin.png')






  return (
    <>
      <Practice></Practice>
    </>
  );
}

export default App;
