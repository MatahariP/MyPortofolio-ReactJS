import React from "react";
import icon from "../image/logo/Sun.svg";
import profile from "../image/PasFoto_Android_Adip.png";

const About = () => {
  return (
    <>
      <main className="about">
        <div className="title">
          <img className="icon" src={icon} alt="" />
          <h1>About Me</h1>
        </div>
        <br />
        <article>
          <table>
            <tbody>
              <tr>
                <td>
                  <img className="profile" src={profile} alt="" />
                </td>
                <td>
                  <p>
                    {" "}
                    Hello, i’m Matahari Pradipta,
                    <br />
                    I’m an ungraduate Information System Student at Universitas
                    Pembangunan Nasional Veteran Jakarta. I’m interested to
                    Front End, Back End, System Analyst, etc. You can see my
                    project at my github and can contact me in my gmail or my
                    LinkedIn. Feel free to ask !!
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
    </>
  );
};

export default About;
