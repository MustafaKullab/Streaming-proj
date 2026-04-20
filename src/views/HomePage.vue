<template>
  <div class="home_page" ref="mainPage">
    <div
      class="landing"
      :style="{
        backgroundImage: isMobile ? `url(${landingMobileImg})` : `url(${landingImg})`,
      }"
    >
      <div class="container-fluid">
        <h1 class="title">Stranger Things</h1>
        <p class="short-description">
          A group of young friends in a small town uncover supernatural forces and secret government
          experiments as they search for their missing friend.
        </p>
        <div class="actions">
          <button class="btn"><i class="bi bi-play-fill"></i> Watch Now</button>
          <button class="btn" @click="router.push({ name: 'mylist' })">
            <i class="bi bi-bookmark-fill"></i> + My List
          </button>
        </div>
        <div class="details">
          <span class="watch"><strong>98%</strong> Match</span>
          <span class="year">2016</span>
          <span class="seasons">5 Seasons</span>
          <span class="quality">HD</span>
        </div>
      </div>
    </div>
    <div class="slider-image">
      <div class="title">
        <h2>Popular On Stream</h2>
      </div>
      <div class="slider-wrapper">
        <div class="left" @click="scroll(slider, -200)">
          <i class="bi bi-arrow-left-square"></i>
        </div>
        <div class="right" @click="scroll(slider, 200)">
          <i class="bi bi-arrow-right-square"></i>
        </div>
        <div class="images" ref="slider">
          <div class="image" v-for="(img, i) in imgArray" :key="i">
            <img :src="img.image" :alt="img.name" />
            <div class="details">
              <div class="heading">
                <h3>{{ img.name }}</h3>
              </div>
              <p class="describe">{{ img.details }}</p>
              <div class="actions d-flex justify-content-center gap-2">
                <button class="btn watch-btn">Watch Now</button>
                <button class="btn details-btn" @click="showDetails(img)">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row slider-list">
      <div class="col-lg-9 slider">
        <div class="trending-now">
          <div class="title">
            <h2>Trending Now</h2>
          </div>
          <div class="slider-wrapper">
            <span class="left" @click="scroll(trendingSlider, -200)">
              <i class="bi bi-arrow-left-square"></i
            ></span>
            <span class="right" @click="scroll(trendingSlider, 200)">
              <i class="bi bi-arrow-right-square"></i
            ></span>
            <div class="images" ref="trendingSlider">
              <div class="image" v-for="(item, i) in trendingArray" :key="i">
                <img :src="item.image" :alt="item.name" />
                <div class="details">
                  <div class="heading">
                    <h3>{{ item.name }}</h3>
                  </div>
                  <p class="describe">{{ item.details }}</p>
                  <div class="actions d-flex justify-content-center gap-2">
                    <button class="btn watch-btn">Watch Now</button>
                    <button class="btn details-btn" @click="showDetails(item)">Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-list">
          <div class="title">
            <h2>My List</h2>
          </div>
          <div class="slider-wrapper">
            <span class="left" @click="scroll(listSlider, -200)">
              <i class="bi bi-arrow-left-square"></i
            ></span>
            <span class="right" @click="scroll(listSlider, 200)">
              <i class="bi bi-arrow-right-square"></i
            ></span>
            <div class="images" ref="listSlider">
              <div class="image" v-for="(item, i) in myList" :key="i">
                <img :src="item.image" :alt="item.name" />
                <div class="details">
                  <div class="heading">
                    <h3>{{ item.name }}</h3>
                  </div>
                  <p class="describe">{{ item.details }}</p>
                  <div class="actions d-flex justify-content-center gap-2">
                    <button class="watch-btn">Watch Now</button>
                    <button class="details-btn" @click="showDetails(item)">Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 list">
        <div class="title">
          <h2><span class="me-2" style="font-size: 1.8rem">🌟</span>Trending Now</h2>
          <ul>
            <li><a href="#">1 All Of Us Are Dead</a></li>
            <li><a href="#">2 Lucifer</a></li>
            <li><a href="#">3 Dark</a></li>
            <li><a href="#">4 Narcos</a></li>
            <li><a href="#">5 The Quen's Gambit</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row footer text-center text-md-start">
      <div class="col-lg-3 pages">
        <div class="title">
          <h2>Stream</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="" @click="router.push({ name: 'tvshows' })">Tv Shows</a></li>
            <li><a href="" @click="router.push({ name: 'movies' })">Movies</a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="title">
          <h2>Company</h2>
        </div>
        <ul>
          <li><a href="#">Account</a></li>
          <li><a href="#">Help Center</a></li>
        </ul>
      </div>
      <div class="col-lg-2">
        <div class="title">
          <h2>Support</h2>
          <ul>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Cookie</a></li>
            <li><a href="#">Cookie Preferences</a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-2">
        <div class="title">
          <h2>Twitter</h2>
        </div>
        <ul>
          <li><a href="#">Privacy Rghts</a></li>
        </ul>
      </div>
      <div class="col-lg-2">
        <ul class="social justify-content-center justify-content-md-start">
          <li>
            <a href="#"><i class="bi bi-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="bi bi-twitter-x"></i></a>
          </li>
          <li>
            <a href="#"><i class="bi bi-facebook"></i></a>
          </li>
        </ul>
        <div class="copyright">&copy; {{ year }} Stream, Inc.</div>
      </div>
    </div>
    <!-- Popup Of Films  -->
    <div v-if="selectedItem" class="popup overlay" @click.self="closeItem" @keydown.esc="closeItem">
      <div class="boxPopup">
        <img :src="selectedItem.image" alt="" />

        <div class="text">
          <h2>{{ selectedItem.name }}</h2>

          <p>{{ selectedItem.details }}</p>

          <button class="btn" @click="closeItem">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// --- 1. استيراد صور الـ Landing ---
import landingImg from "/images/landing.png";
import landingMobileImg from "/images/landingMobile.png";

// --- 2. استيراد صور Popular On Stream ---
import aranceImg from "/images/Arance2.webp";
import avengersImg from "/images/Avengers.webp";
import blackImg from "/images/Black.webp";
import breakingBadImg from "/images/Breaking-Bad.webp";
import caryOnImg from "/images/Cary-on.webp";
import moneyHeistImg from "/images/Money-Heist.webp";
import searchingImg from "/images/Searching.webp";
import sherlockImg from "/images/Sherlock-Holmes.webp";
import squidGameImg from "/images/Squid-Game2.webp";
import witcherImg from "/images/The-Witcher.webp";

// --- 3. استيراد صور Trending Now ---
import mikeNikeImg from "/images/Mike-Nike.webp";
import projectMarryImg from "/images/Project-Marry.webp";
import shelterImg from "/images/shelter.webp";
import peakyImg from "/images/peaky.webp";
import theRipImg from "/images/the-rip.webp";

// --- 4. استيراد صور My List ---
import agentZetaImg from "/images/agent-zeta.webp";
import warMachineImg from "/images/war-machine.webp";
import strangerThingsImg from "/images/stranger-things.webp";
import willTrentImg from "/images/will-trent.webp";
import ncisImg from "/images/ncis.webp";
import houseImg from "/images/house.webp";

// Data
const router = useRouter();
const mediaQuery = window.matchMedia("(max-width:767px)");
const isMobile = ref(mediaQuery.matches);
const imgArray = ref([
  {
    name: "Arance2 (2025)",
    image: aranceImg,
    details: "Two sisters face opposing sides of a magical and technological conflict.",
  },
  {
    name: "Avengers (2012)",
    image: avengersImg,
    details: "Earth’s heroes unite to stop a powerful enemy threatening humanity.",
  },
  {
    name: "Black (2025)",
    image: blackImg,
    details: "A dark look at how technology affects human behavior.",
  },
  {
    name: "Breaking Bad (2008)",
    image: breakingBadImg,
    details: "A chemistry teacher turns to making drugs, leading to crime and power.",
  },
  {
    name: "Carry On (Cary-on) (2025)",
    image: caryOnImg,
    details: "A routine situation spirals into a high-stakes crisis.",
  },
  {
    name: "Money Heist (2017)",
    image: moneyHeistImg,
    details: "A mastermind leads robbers in a daring heist against the police.",
  },
  {
    name: "Searching (2018)",
    image: searchingImg,
    details: "A father searches through his missing daughter’s digital life.",
  },
  {
    name: "Sherlock Holmes (2009)",
    image: sherlockImg,
    details: "A brilliant detective solves complex crimes with observation skills.",
  },
  {
    name: "Squid Game (Squid-Game2) (2021)",
    image: squidGameImg,
    details: "Players compete in deadly games for a massive cash prize.",
  },
  {
    name: "The Witcher (2019)",
    image: witcherImg,
    details: "A monster hunter navigates a world of magic, politics, and destiny.",
  },
]);
const slider = ref(null);
const trendingArray = ref([
  {
    name: "Mike & Nick & Nick & Alice (2026)",
    image: mikeNikeImg,
    details: "Sci-fi comedy about two quirky characters on a chaotic night adventure.",
  },
  {
    name: "Project Hail Mary (2026)",
    image: projectMarryImg,
    details: "Astronaut wakes up light-years from Earth to save humanity.",
  },
  {
    name: "Shelter (2026)",
    image: shelterImg,
    details: "Ex-assassin protects a young girl while facing his past.",
  },
  {
    name: "Peaky Blinders: The Immortal Man (2026)",
    image: peakyImg,
    details: "Tommy Shelby faces new dangers and family drama during WWII.",
  },
  {
    name: "The Rip (2026)",
    image: theRipImg,
    details: "Crime thriller with deception and high-stakes survival.",
  },
]);

const myList = ref([
  {
    name: "Agent Zeta (2026)",
    image: agentZetaImg,
    details: "Spy thriller where Agent Zeta uncovers a deadly conspiracy.",
  },
  {
    name: "War Machine (2026)",
    image: warMachineImg,
    details: "Sci-fi action about elite soldiers facing deadly machine forces.",
  },
  {
    name: "Stranger Things (2016)",
    image: strangerThingsImg,
    details: "Kids uncover supernatural secrets in 1980s Indiana.",
  },
  {
    name: "Will Trent (2023)",
    image: willTrentImg,
    details: "GBI agent solves tough Atlanta cases while facing his past.",
  },
  {
    name: "NCIS (2003)",
    image: ncisImg,
    details: "Naval investigators solve crimes involving Navy and Marines.",
  },
  {
    name: "House (2004)",
    image: houseImg,
    details: "Brilliant but misanthropic doctor solves complex medical cases.",
  },
]);
const trendingSlider = ref(null);
const listSlider = ref(null);
const year = ref(new Date().getFullYear());
const selectedItem = ref(null);

// Methods
function updateMedia(e) {
  isMobile.value = e.matches;
}

onMounted(() => {
  mediaQuery.addEventListener("change", updateMedia);
});

onUnmounted(() => {
  mediaQuery.removeEventListener("change", updateMedia);
});

function scroll(el, destince) {
  const element = el.value || el;

  element.scrollBy({
    left: destince,
    behavior: "smooth",
  });
}

function showDetails(item) {
  selectedItem.value = item;
}

function closeItem() {
  selectedItem.value = null;
}

const handleCloseitem = (e) => {
  if (e.key === "Escape" && selectedItem.value) {
    closeItem();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleCloseitem);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleCloseitem);
});
</script>

<style lang="scss">
.home_page {
  width: 100%;
  overflow-x: hidden;
  position: relative;
  .landing {
    color: white;
    text-align: left;
    padding: 20px;
    height: calc(100vh - 74px);
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      & {
        justify-content: center;
        text-align: center;
        height: calc(100vh - 64px);
      }
    }
    .container-fluid {
      width: 50%;
      margin: 0;
      margin-bottom: 100px;
      @media (max-width: 767px) {
        & {
          width: 400px;
        }
      }
      h1 {
        font-size: 50px;
        margin: 0 0 20px;
        color: #fefefe;
        letter-spacing: -1px;
      }
      p {
        font-size: 17px;
        color: #e0deda;
        font-weight: 300;
      }
      .actions {
        margin: 20px 0;
        button:first-child {
          background-color: #e82929;
          color: white;
          transition: 0.4s;
          margin-right: 10px;
          &:hover {
            background-color: #b41919;
          }
        }
        button:last-child {
          background-color: #201f23;
          color: white;
          transition: 0.4s;
          &:hover {
            background-color: #171718;
          }
        }
      }
      .details {
        span {
          margin-right: 15px;
          font-weight: normal;
          color: #aca7ac;
          strong {
            color: #31ba7a;
          }
          &:last-of-type {
            border: 2px solid #aca7ac;
            padding: 0 6px;
            border-radius: 2px;
          }
        }
      }
    }
  }
  .slider-image {
    padding: 20px;
    .title {
      h2 {
        color: white;
        font-size: 30px;
        font-weight: normal;
        padding: 20px 0;
      }
    }
    .slider-wrapper {
      position: relative;
      .left,
      .right {
        font-size: 25px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10000;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.537);
        transition: 0.5s;
      }
      .left:hover,
      .right:hover {
        color: white;
      }
      .left {
        left: 20px;
      }
      .right {
        right: 20px;
      }
      .images {
        display: flex;
        gap: 10px;
        overflow-x: auto;
        scroll-behavior: smooth;
        overflow-y: hidden;
        &::-webkit-scrollbar {
          height: 10px;
        }
        &::-webkit-scrollbar-track {
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
        .image {
          position: relative;
          cursor: pointer;
          min-width: 200px;
          transition: 0.5s;
          &:hover {
            transform: scale(1.05);
            z-index: 600;
          }
          img {
            width: 100%;
            border-radius: 8px 8px 0 0;
          }
          .details {
            position: absolute;
            bottom: 0;
            padding: 15px;
            color: white;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2));
            backdrop-filter: blur(6px);
            transform: translateY(100%) scale(0.7);
            display: flex;
            flex-direction: column;
            justify-content: end;
            transition: 0.3s;
            height: fit-content;
            .heading {
              h3 {
                font-size: 20px;
                text-transform: uppercase;
              }
            }
          }
          &:hover .details {
            transform: translateY(0px) scale(1);
          }
          .actions {
            .watch-btn {
              background: #e50914; /* Netflix Red */
              color: white;
              padding: 5px 10px;
              border: none;
              outline: none;
              border-radius: 5px;
              font-size: 14px;
              transition: 0.3s;
              &:hover {
                background: #ff1f2f;
              }
            }
            .details-btn {
              background: rgba(255, 255, 255, 0.1);
              color: white;
              padding: 5px 10px;
              border: none;
              outline: none;
              border-radius: 5px;
              font-size: 14px;
              border: 1px solid rgba(255, 255, 255, 0.3);
              transition: 0.3s;
              &:hover {
                background: rgba(255, 255, 255, 0.2);
              }
            }
          }
          &:hover .details {
            transform: translateY(0) scale(1);
          }
        }
      }
    }
  }
  .slider-list {
    padding: 20px;
    .slider {
      .trending-now {
        margin-bottom: 30px;
        .title {
          h2 {
            color: white;
            font-size: 30px;
            font-weight: normal;
            padding: 20px 0;
          }
        }
        .slider-wrapper {
          position: relative;
          .left,
          .right {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1000;
            font-size: 25px;
            color: rgba(255, 255, 255, 0.537);
            transition: 0.4s;
            cursor: pointer;
            &:hover {
              color: white;
            }
          }
          .right {
            right: 20px;
          }
          .left {
            left: 20px;
          }
          .images {
            display: flex;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-behavior: smooth;
            gap: 10px;
            &::-webkit-scrollbar {
              height: 10px;
            }
            &::-webkit-scrollbar-track {
              background-color: transparent;
            }
            &::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.2);
              border-radius: 10px;
            }
            &::-webkit-scrollbar-thumb:hover {
              background-color: rgba(255, 255, 255, 0.3);
            }
            .image {
              min-width: 300px;
              position: relative;
              cursor: pointer;
              overflow: hidden;
              transition: 0.4s;
              &:hover {
                transform: scale(1.05);
                z-index: 600;
              }
              .details {
                position: absolute;
                bottom: 0;
                padding: 20px;
                color: white;
                background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2));
                backdrop-filter: blur(6px);
                display: flex;
                flex-direction: column;
                justify-content: end;
                transform: translateY(100%) scale(0.7);
                transition: 0.3s;
                height: fit-content;
                .heading {
                  h3 {
                    font-size: 20px;
                    text-transform: uppercase;
                  }
                }
              }
              &:hover .details {
                transform: translateY(1px) scale(1);
              }
              .actions {
                .watch-btn {
                  background: #e50914; /* Netflix Red */
                  color: white;
                  transition: 0.3s;
                  &:hover {
                    background: #ff1f2f;
                  }
                }
                .details-btn {
                  background: rgba(255, 255, 255, 0.1);
                  color: white;
                  border: 1px solid rgba(255, 255, 255, 0.3);
                  transition: 0.3s;
                  &:hover {
                    background: rgba(255, 255, 255, 0.2);
                  }
                }
              }
              img {
                width: 100%;
                border-radius: 8px 8px 0 0;
              }
            }
          }
        }
      }
      .my-list {
        margin-bottom: 30px;
        .title {
          h2 {
            color: white;
            font-size: 30px;
            font-weight: normal;
            padding: 20px 0;
          }
        }
        .slider-wrapper {
          position: relative;
          .left,
          .right {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1000;
            font-size: 25px;
            color: rgba(255, 255, 255, 0.537);
            transition: 0.1s;
            cursor: pointer;
            &:hover {
              color: white;
            }
          }
          .right {
            right: 20px;
          }
          .left {
            left: 20px;
          }
          .images {
            display: flex;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-behavior: smooth;
            gap: 10px;
            &::-webkit-scrollbar {
              height: 10px;
            }
            &::-webkit-scrollbar-track {
              background-color: transparent;
            }
            &::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.2);
              border-radius: 10px;
            }
            &::-webkit-scrollbar-thumb:hover {
              background-color: rgba(255, 255, 255, 0.3);
            }
            .image {
              min-width: 200px;
              position: relative;
              cursor: pointer;
              overflow: hidden;
              transition: 0.4s;
              &:hover {
                transform: scale(1.05);
                z-index: 600;
              }
              .details {
                position: absolute;
                bottom: 0;
                padding: 15px;
                color: white;
                background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2));
                backdrop-filter: blur(6px);
                transform: translateY(100%) scale(0.7);
                display: flex;
                flex-direction: column;
                justify-content: end;
                transition: 0.3s;
                height: fit-content;
                .heading {
                  h3 {
                    font-size: 20px;
                    text-transform: uppercase;
                  }
                }
              }
              &:hover .details {
                transform: translateY(0px) scale(1);
              }
              .actions {
                .watch-btn {
                  background: #e50914; /* Netflix Red */
                  color: white;
                  padding: 5px 10px;
                  border: none;
                  outline: none;
                  border-radius: 5px;
                  font-size: 14px;
                  transition: 0.3s;
                  &:hover {
                    background: #ff1f2f;
                  }
                }
                .details-btn {
                  background: rgba(255, 255, 255, 0.1);
                  color: white;
                  padding: 5px 10px;
                  border: none;
                  outline: none;
                  border-radius: 5px;
                  font-size: 14px;
                  border: 1px solid rgba(255, 255, 255, 0.3);
                  transition: 0.3s;
                  &:hover {
                    background: rgba(255, 255, 255, 0.2);
                  }
                }
              }
              img {
                width: 100%;
                border-radius: 8px 8px 0 0;
              }
            }
          }
        }
      }
    }
    .list {
      .title {
        h2 {
          color: white;
          font-size: 30px;
          font-weight: normal;
          padding: 20px 0;
        }
      }
      ul {
        li {
          a {
            display: block;
            color: #c6c3ca;
            padding: 10px;
            margin: 10px 0;
            background-color: #151418;
            border-radius: 6px;
            transition: 0.4s;
            &:hover {
              background-color: #201f23;
            }
          }
        }
      }
    }
  }
  .footer {
    background-color: #111014;
    padding: 30px 20px 20px;
    div {
      @media (max-width: 767px) {
        & {
          margin-bottom: 20px;
        }
      }
      .title {
        h2 {
          font-size: 20px;
          color: white;
        }
      }
      ul:not(.social) {
        @media (max-width: 991px) {
          & {
            margin-bottom: 20px;
          }
        }
        li {
          a {
            display: block;
            width: fit-content;
            color: #8d878a;
            padding: 5px 0;
            transition: 0.5s;
            @media (max-width: 767px) {
              margin: auto;
            }
            &:hover {
              transform: translateX(3px);
              color: white;
            }
          }
        }
      }
      .social {
        display: flex;
        gap: 20px;
        margin-bottom: 60px;
        li {
          a {
            padding: 6px 12px;
            border-radius: 5px;
            background-color: #27262a;
            color: #b1b0b6;
            transition: 0.3s;
            &:hover {
              background-color: #1c1b1f;
            }
          }
        }
      }
      .copyright {
        color: #b1b0b6;
      }
    }
  }
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.452);
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100000;
    .boxPopup {
      text-align: center;
      @media (max-width: 767px) {
        & {
          width: 80%;
        }
      }
      img {
        width: 250px;
        margin-left: auto;
        border-radius: 20px;
        @media (max-width: 767px) {
          width: 180px;
        }
      }
      .text {
        margin-top: 20px;
        padding: 20px;
        background: linear-gradient(45deg, #000000, transparent);
        text-align: left;
        color: white;
        border-radius: 10px;
        h2 {
          margin-bottom: 10px;
          font-weight: bold;
          letter-spacing: -1px;
          @media (max-width: 767px) {
            & {
              font-size: 20px;
            }
          }
        }
        p {
          @media (max-width: 767px) {
            & {
              font-size: 14px;
            }
          }
        }
        button {
          margin: auto;
          display: block;
          border: 1px solid #c9c9c9;
          color: #c9c9c9;
          transition: 0.5s;
          padding: 5px 20px;
          @media (max-width: 767px) {
            & {
              font-size: 13px;
            }
          }
          &:hover {
            background-color: #c9c9c9;
            color: black;
            border: 1px solid #c9c9c9;
          }
        }
      }
    }
  }
}
</style>
