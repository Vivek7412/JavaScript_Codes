// this keyword

const student = {
  name: "vivek",
  age: 23,
  eng: 95,
  math: 99,
  phy: 97,
  getAvg() {

    let avg = (this.eng + this.math + this.phy) / 3;
    
    console.log(`${this.name} got avg marks = ${avg}`);
  }
}
student.getAvg();
