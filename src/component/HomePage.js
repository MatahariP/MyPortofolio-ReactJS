import React from "react";
import Instagram from "../image/logo/Instagram_white.png";
import Github from "../image/logo/github-logo_white.png";
import LinkedIn from "../image/logo/linkedin_white.png";
import Email from "../image/logo/Email_White.png";
import profile from "../image/PasFoto_Android_Adip.png";

function HomePage() {
  return (
    <>
      <main className="home">
        <aside>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/matahari-pradipta-676120268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img
                  className="logo"
                  src={LinkedIn}
                  id="LinkedIn"
                  alt="linkedIn"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/MatahariP">
                <img className="logo" src={Github} id="github" alt="Github" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mataharipradipta/">
                <img
                  className="logo"
                  src={Instagram}
                  id="Instagram"
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a href="mailto:mataharipradipta02@gmail.com">
                <img className="logo" src={Email} id="gmail" alt="email" />
              </a>
            </li>
          </ul>
        </aside>
        <article>
          <table>
            <tbody>
              <tr>
                <td>
                  <h1>
                    Hello Everyone,
                    <br />
                    I'm Matahari Pradipta <br />
                    Welcome to my website!!
                  </h1>

                  <button>
                    <a href="/about">More About Me</a>
                  </button>
                </td>
                <td>
                  <img className="profile" src={profile} alt="Profile" />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
    </>
  );
}

export default HomePage;
