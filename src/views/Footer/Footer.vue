<template>
  <div class="Footer ">
    <div class="Section_one pt-5">
      <ul>
        <li class="fw-bold py-3">Top Products</li>
        <li>Managed Website</li>
        <li>Manage Reputation</li>
        <li>Power Tools</li>
        <li>Marketing Service</li>
      </ul>
      <ul>
        <li class="fw-bold py-3">Quick Links</li>
        <li>Jobs</li>
        <li>Brand Assets</li>
        <li>Investor Relations</li>
        <li>Terms of Service</li>
      </ul>
      <ul>
        <li class="fw-bold py-3">Features</li>
        <li>Jobs</li>
        <li>Brand Assets</li>
        <li>Investor Relations</li>
        <li>Terms of Service</li>
      </ul>
      <ul>
        <li class="fw-bold py-3">Resources</li>
        <li>Guides</li>
        <li>Research</li>
        <li>Experts</li>
        <li>Agencies</li>
      </ul>
    </div>
    <div class="Section_two m-auto">
      <p class="text-white text-center py-3">
        Copyright ©2023 All rights reserved || website name
      </p>
      <div class=" w-[100%] md:w-[40%] text-3xl  py-5 justify-around m-auto flex text-white fs-4">
        <i class="fa-solid fa-house"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-telegram"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>

.Footer {
  width: 100%;
  height: 450px;
  background: linear-gradient(
    0deg,
    rgb(44, 51, 59) 100%,
    rgba(52, 141, 230, 0.9472163866) 100%
  );
  font-family: Glory, sans-serif;
}
.Section_one {
  display: flex;
  justify-content: space-around;
  margin: auto;
  width: 80%;
  height: 70%;
}
ul li {
  list-style: none;
  padding-top: 20px;
  color: #fff;
  font-size: 0.9rem;
}
li:hover {
  cursor: pointer;
  margin-top: -2px;
  text-decoration: underline;
}
ul :first-child {
  padding-top: 25px !important;
  font-size: 1rem;
  text-decoration: none !important;
}
.Section_two p {
  font-size: 0.8rem;
}
.Section_network {
  width: 30%;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
}
.Section_network i {
  font-size: 1.8rem !important;
}
.Section_network i:hover {
  cursor: pointer;
  margin-top: -5px;
}
/* Responsive 385px */
@media (max-width: 385px) {
  .Footer {
    height: auto;
  }
  .Section_one {
    width: 100%;
    flex-wrap: wrap;
  }
  ul li {
    padding-top: 10px !important;
    font-size: 0.8rem;
    padding-right: 15px;
  }
  ul {
    padding-left: 30px;
  }
  ul:first-child {
    padding-top: 15px;
  }
  .Section_two p {
    font-size: 0.7rem;
    margin-top: 7vh;
  }
  .Section_network i {
    font-size: 1.3rem !important;
  }
  .Section_network {
    width: 60%;
  }
}
/* Responsive 576px */
@media (max-width: 576px) {
  .Footer {
    height: auto;
  }
  .Section_one {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    
  }
  ul li {
    padding-top: 13px !important;
    font-size: 0.9rem;
    padding-right: 15px;
  }
  ul {
    padding-left: 30px;
  }
  ul:first-child {
    padding-top: 15px;
  }
  .Section_two p {
    font-size: 0.75rem;
    margin-top: 7vh;
  }
  .Section_network i {
    font-size: 1.5rem !important;
  }
  .Section_network {
    width: 60%;
  }
}
</style>
