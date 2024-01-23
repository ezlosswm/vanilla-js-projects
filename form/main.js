import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
      <div class="border border-black h-screen md:max-h-96 w-full md:w-3/5">
        <div class="py-2">
          <h3 class="text-center text-3xl font-bold">Form Validator</h3>

          <form id="form" class="w-3/4 mx-auto space-y-2">
            <div class="form-control flex flex-col space-y-2 px-8">
              <label class="font-medium text-xl" for="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                class="border border-black focus:outline-blue-600 rounded-lg py-4 px-2"
              />
                <p class="errMsg h-4 italic font-thin text-red-500"></p>
            </div>

            <div class="form-control flex flex-col space-y-2 px-8">
              <label class="font-medium text-xl" for="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                class="border border-black rounded-lg focus:outline-blue-600 py-4 px-2"
              />
                <p class="errMsg h-4 italic font-thin text-red-500"></p>
            </div>

            <div class="form-control flex flex-col space-y-2 px-8">
              <label class="font-medium text-xl" for="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                class="border border-black focus:outline-blue-600 rounded-lg py-4 px-2"
              />
                <p class="errMsg h-4 italic font-thin text-red-500"></p>
            </div>

            <div class="py-2 px-8">
              <button
                type="submit"
                class="w-full p-4 rounded-lg bg-orange-500 hover:bg-orange-600 font-medium text-white text-lg focus:outline-orange-700"
              > Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

setupCounter(document.querySelector("#counter"));
