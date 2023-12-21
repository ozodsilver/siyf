<template>
  <div>
    <!--  -->
    <div id="Auth">
      <div id="login">
        <div class="main backdrop-blur-md">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="signup"></div>

          <div class="login">
            <form>
              <label for="chk" class="pt-3 text-white">Login</label>
              <input
                type="text"
                placeholder="Login"
                required=""
                v-model="email"
              />
              <input
                type="password"
                placeholder="Password"
                required=""
                v-model="password"
              />
              <button
                class="d-flex justify-content-center align-items-center bg-primary"
              >
                <span>Login</span>
                <div
                  class="spinner-border fw-lighter py-1"
                  style="font-sizde: 10px"
                  v-if="loade"
                ></div>
              </button>
            </form>

            <img alt="" class="w-25 m-auto d-block" />
            <h4 class="text-center mt-3 animation text-white">
              <span id="dilkhush ">Siyf </span> Admin Panel
            </h4>
          </div>
        </div>

        <div
          class="shape1 top-[57%] opacity-60 left-[33%] rounded-full absolute z-50"
        ></div>
        <div
          class="shape2 top-[22%] opacity-50 right-[34%] rounded-full absolute z-50"
        ></div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#Auth {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  background: linear-gradient(
    -65deg,
    rgba(17, 64, 113, 1),
    rgba(52, 141, 230, 0.9472163865546218)
  );
  background-attachment: fixed;
  background-size: cover;
}

#form {
  backdrop-filter: blur(10px) saturate(152%);
  -webkit-backdrop-filter: blur(10px) saturate(152%);
  background-color: rgba(255, 255, 255, 0.58);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
}

#login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Jost", sans-serif;
  background-position: center;
  background-size: contain;
}
#login:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
}
.main {
  width: 450px;
  height: 500px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 0px 45px rgba(173, 180, 178, 0.246);
  position: relative;
  z-index: 22222222;
}
#chk {
  display: none;
}
.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
label {
  color: (rgba(52, 141, 230, 0.9472163865546218)) !important;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
input {
  width: 70%;
  height: 20px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
}
button {
  width: 70%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: linear-gradient(
    -45deg,
    rgba(17, 64, 113, 1),
    rgba(52, 141, 230, 0.9472163865546218)
  );
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
button:hover {
  background: linear-gradient(
    -180deg,
    rgba(17, 64, 113, 1),
    rgba(52, 141, 230, 0.9472163865546218)
  );
}
.login {
  height: 500px;
  background: rgb(255, 255, 255);

  border-radius: 60% / 10%;
  transform: translateY(-500px);

  box-shadow: 0 0 4px rgba(184, 212, 209, 0.493);
  transition: 0.3s ease-in-out;
}
.login label {
  color: #573b8a;
  transform: scale(0.6);
}

// #chk:checked ~ .login {
// transform: translateY(-500px);
// }
// #chk:checked ~ .login label {
//   transform: scale(1);
// }
// #chk:checked ~ .signup label {
//   transform: scale(0.6);
// }

.animation {
  background: linear-gradient(
    -90deg,
    rgba(17, 64, 113, 1),
    rgba(52, 141, 230, 0.9472163865546218)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#dilkhush {
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
}

.main {
  background-image: url("../assets/logo.svg");
  background-size: 80%;

  background-repeat: no-repeat;
  background-position: center 15px;
}

.glass {
  backdrop-filter: 20px;
}

@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
</style>
