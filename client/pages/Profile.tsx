import Image from "next/image";
function Profile() {
  const description = "fat";
  return (
    <div className="profile">
      {/* <div className="card">
        <div className="ds-top"></div>
        <div className="avatar-holder">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWPe04ve7gxfEdYYJSI54lNBlQID_tO0bAw&usqp=CAU"
            alt="img"
          />
        </div>
        <div className="name">
          <h2>Mr Monkey</h2>
        </div>

        <div className="ds-info">
          <div className="ds pens">
            <h6 title="height">
              height <i className="fas fa-edit"></i>
            </h6>
            <p>29</p>
          </div>
          <div className="ds projects">
            <h6 title="weight">
              weight <i className="fas fa-project-diagram"></i>
            </h6>
            <p>0</p>
          </div>
          <div className="ds posts">
            <h6 title="Number of posts">
              Posts <i className="fas fa-comments"></i>
            </h6>
            <p>0</p>
          </div>
        </div>
        <div className="ds-skill">
          <h6>Skill</h6>
          <div className="skill">
            <h6>
              <i className="fab "></i> IMC{" "}
            </h6>
            {description === "fat" && (
              <div className="bar bar-FAT">
                <p>34</p>
              </div>
            )}
            {description === "normal" && (
              <div className="bar bar-NORMAL">
                <p>34</p>
              </div>
            )}
            {description === "under" && (
              <div className="bar bar-UNDER">
                <p>34</p>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Profile;
