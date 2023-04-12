// Import the necessary modules
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Read the HTML file into a string
const html = fs.readFileSync("index.html", "utf-8");

// Set up a mock DOM environment
const dom = new JSDOM(html, { runScripts: "dangerously" });
global.document = dom.window.document;

// Import the JavaScript file and checkPasswordStrength function
const script = fs.readFileSync("script.js", "utf-8");
eval(script);

describe("Password strength checker", () => {
  test("Check password strength function", () => {
    expect(checkPasswordStrength("password")).toBe(2);
    expect(checkPasswordStrength("P@ssword123")).toBe(5);
    expect(checkPasswordStrength("short")).toBe(1);
    expect(checkPasswordStrength("aA1$")).toBe(4);
    expect(checkPasswordStrength("supersecurepassword")).toBe(3);
    expect(checkPasswordStrength("p@$$w0rd")).toBe(4);
    expect(checkPasswordStrength("StrongPassword!1234")).toBe(6);
  });

  test("Check password strength function",()=>{
    expect(checkPasswordStrength("Password1")).toBe(4);
  });

  test("Check password strength function",()=>{
    expect(checkPasswordStrength("longpassword1234")).toBe(4);
  });

  test("Check password strength on button click", () => {
    // Get the necessary elements from the DOM
    const passwordInput = document.getElementById("password");
    const checkBtn = document.getElementById("checkBtn");
    const strength = document.getElementById("strength");
    const input = document.getElementById("input");

    // Set the password input value and click the check button
    passwordInput.value = "Password1";
    checkBtn.click();

    // Check that the strength value and input value are displayed correctly
    expect(strength.textContent).toBe("Password strength: 4");
    expect(input.textContent).toBe("Given Password: Password1");
    expect(strength.style.color).toBe("yellow");
  });
});
