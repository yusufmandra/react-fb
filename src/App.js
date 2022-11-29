import { useState, useEffect } from 'react';
import "font-awesome/css/font-awesome.min.css";

function App() {

  const [isActive, setIsActive] = useState(false)
  const [isBtn, setIsBtn] = useState(false)

  const settingsMenuToggle = () => {
    setIsActive(current => !current)
  };

  const themeToggle = () => {
    setIsBtn(current => !current)
    document.body.classList.toggle("dark-theme")
    if( localStorage.getItem("theme") === 'light' ){
      localStorage.setItem("theme", "dark");
    }else{
      localStorage.setItem("theme", "light");
    }
  }

  useEffect(() => {
    if( localStorage.getItem("theme") === 'light' ){
      setIsBtn(false)
      document.body.classList.remove("dark-theme");
    }else if( localStorage.getItem("theme") === 'dark' ){
      setIsBtn(true)
      document.body.classList.add("dark-theme");
    }else{
      localStorage.setItem("theme", "light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <nav>
        <div className="nav-left">
          <img src="/images/logo.png" className="logo" alt="logo"/>
          <ul>
            <li><img src="/images/notification.png" alt="notification" /></li>
            <li><img src="/images/inbox.png" alt="inbox" /></li>
            <li><img src="/images/video.png" alt="video" /></li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="search-box">
            <img src="/images/search.png" alt="search" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav-user-icon online" onClick={settingsMenuToggle}>
            <img src="/images/profile-pic.png" alt="profile"/>
          </div>
        </div>
        <div className={ "settings-menu " + (isActive ? "settings-menu-height" : "" ) } >
          <div id="dark-btn" className={ isBtn ? "dark-btn-on" : "" } onClick={themeToggle}>
            <span></span>
          </div>
          <div className="settings-menu-inner">
            <div className="user-profile">
              <img src="/images/profile-pic.png" alt="profile"/>
              <div>
                <p>John Nicholson</p>
                <a href="/#">See your profile</a>
              </div>
            </div>
            <hr />
            <div className="user-profile">
              <img src="/images/feedback.png" alt="feedback" />
              <div>
                <p>Give Feedback</p>
                <a href="/#">Help us to improve the new design</a>
              </div>
            </div>
            <hr />
            <div className="setting-links">
              <img src="/images/setting.png" className="settings-icon" alt="setting" />
              <a href="/#">Settings & Privacy <img src="/images/arrow.png" width="10px" alt="arrow" /></a>
            </div>
            <div className="setting-links">
              <img src="/images/help.png" className="settings-icon" alt="help" />
              <a href="/#">Help & Support <img src="/images/arrow.png" width="10px" alt="arrow" /></a>
            </div>
            <div className="setting-links">
              <img src="/images/display.png" className="settings-icon" alt="display" />
              <a href="/#">Display & Accessibility <img src="/images/arrow.png" width="10px" alt="arrow" /></a>
            </div>
            <div className="setting-links">
              <img src="/images/logout.png" className="settings-icon" alt="logout" />
              <a href="/#">Logout <img src="/images/arrow.png" width="10px" alt="arrow" /></a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="left-sidebar">
          <div className="imp-links">
            <a href="/#"><img alt="" src="/images/news.png" /> Latest News</a>
            <a href="/#"><img alt="" src="/images/friends.png" /> Friends</a>
            <a href="/#"><img alt="" src="/images/group.png" /> Group</a>
            <a href="/#"><img alt="" src="/images/marketplace.png" /> Marketplace</a>
            <a href="/#"><img alt="" src="/images/watch.png" /> Watch</a>
            <a href="/#">See More</a>
          </div>
          <div className="shortcut-links">
            <p>Your Shortcuts</p>
            <a href="/#"><img alt="" src="/images/shortcut-1.png" /> Web Developers</a>
            <a href="/#"><img alt="" src="/images/shortcut-2.png" /> Web Design course</a>
            <a href="/#"><img alt="" src="/images/shortcut-3.png" /> Full Stack Development</a>
            <a href="/#"><img alt="" src="/images/shortcut-4.png" /> Website Experts</a>
          </div>
        </div>
        <div className="main-content">
          <div className="story-gallery">
            <div className="story story1">
              <img alt="" src="/images/upload.png" />
              <p>Post Story</p>
            </div>
            <div className="story story2">
              <img alt="" src="/images/member-1.png" />
              <p>Alison</p>
            </div>
            <div className="story story3">
              <img alt="" src="/images/member-2.png" />
              <p>Jackson</p>
            </div>
            <div className="story story4">
              <img alt="" src="/images/member-3.png" />
              <p>Samona</p>
            </div>
            <div className="story story5">
              <img alt="" src="/images/member-4.png" />
              <p>John Doe</p>
            </div>
          </div>
          <div className="write-post-container">
            <div className="user-profile">
              <img alt="" src="/images/profile-pic.png" />
              <div>
                <p>John Nicholson</p>
                <small>Public <i className="fa fa-caret-down"></i></small>
              </div>
            </div>
            <div className="post-input-container">
              <textarea rows="3" placeholder="What's on your mind, John?"></textarea>
              <div className="add-post-links">
                <a href="/#"><img alt="" src="/images/live-video.png" /> Live Video</a>
                <a href="/#"><img alt="" src="/images/photo.png" /> Photo/Video</a>
                <a href="/#"><img alt="" src="/images/feeling.png" /> Feeling/Activity</a>
              </div>
            </div>
          </div>

          <div className="post-container">
            <div className="post-row">
              <div className="user-profile">
                <img alt="" src="/images/profile-pic.png" />
                <div>
                  <p>John Nicholson</p>
                  <span>June 24 2021, 10:40 pm</span>
                </div>
              </div>
              <a href="/#"><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <p className="post-text">Subscribe <span>@Mandhra Tutorials</span> YouTube channel to watch more videos on website development and UI design... <a href="/#">#MandhraTutorials</a> <a href="/#">#YouTubeChannel</a></p>
            <img alt="" src="/images/feed-image-1.png" className="post-img" />
            <div className="post-row">
              <div className="activity-icons">
                <div><img alt="" src="/images/like-blue.png" /> 120</div>
                <div><img alt="" src="/images/comments.png" /> 45</div>
                <div><img alt="" src="/images/share.png" /> 20</div>
              </div>
              <div className="post-profile-icon">
                <img alt="" src="/images/profile-pic.png" /> <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="post-row">
              <div className="user-profile">
                <img alt="" src="/images/profile-pic.png" />
                <div>
                  <p>John Nicholson</p>
                  <span>June 24 2021, 10:40 pm</span>
                </div>
              </div>
              <a href="/#"><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <p className="post-text">Like and share this video with friends, tag <span>@Mandhra Tutorials</span> facebook page on your post. Ask your doubts in the comments <a href="/#">#MandhraTutorials</a> <a href="/#">#YouTubeChannel</a></p>
            <img alt="" src="/images/feed-image-2.png" className="post-img" />
            <div className="post-row">
              <div className="activity-icons">
                <div><img alt="" src="/images/like.png" /> 120</div>
                <div><img alt="" src="/images/comments.png" /> 45</div>
                <div><img alt="" src="/images/share.png" /> 20</div>
              </div>
              <div className="post-profile-icon">
                <img alt="" src="/images/profile-pic.png" /> <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="post-row">
              <div className="user-profile">
                <img alt="" src="/images/profile-pic.png" />
                <div>
                  <p>John Nicholson</p>
                  <span>June 24 2021, 10:40 pm</span>
                </div>
              </div>
              <a href="/#"><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <p className="post-text">Like and share this video with friends, tag <span>@Mandhra Tutorials</span> facebook page on your post. Ask your doubts in the comments <a href="/#">#MandhraTutorials</a> <a href="/#">#YouTubeChannel</a></p>
            <img alt="" src="/images/feed-image-3.png" className="post-img" />
            <div className="post-row">
              <div className="activity-icons">
                <div><img alt="" src="/images/like.png" /> 120</div>
                <div><img alt="" src="/images/comments.png" /> 45</div>
                <div><img alt="" src="/images/share.png" /> 20</div>
              </div>
              <div className="post-profile-icon">
                <img alt="" src="/images/profile-pic.png" /> <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="post-row">
              <div className="user-profile">
                <img alt="" src="/images/profile-pic.png" />
                <div>
                  <p>John Nicholson</p>
                  <span>June 24 2021, 10:40 pm</span>
                </div>
              </div>
              <a href="/#"><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <p className="post-text">Like and share this video with friends, tag <span>@Mandhra Tutorials</span> facebook page on your post. Ask your doubts in the comments <a href="/#">#MandhraTutorials</a> <a href="/#">#YouTubeChannel</a></p>
            <img alt="" src="/images/feed-image-4.png" className="post-img" />
            <div className="post-row">
              <div className="activity-icons">
                <div><img alt="" src="/images/like.png" /> 120</div>
                <div><img alt="" src="/images/comments.png" /> 45</div>
                <div><img alt="" src="/images/share.png" /> 20</div>
              </div>
              <div className="post-profile-icon">
                <img alt="" src="/images/profile-pic.png" /> <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="post-row">
              <div className="user-profile">
                <img alt="" src="/images/profile-pic.png" />
                <div>
                  <p>John Nicholson</p>
                  <span>June 24 2021, 10:40 pm</span>
                </div>
              </div>
              <a href="/#"><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <p className="post-text">Like and share this video with friends, tag <span>@Mandhra Tutorials</span> facebook page on your post. Ask your doubts in the comments <a href="/#">#MandhraTutorials</a> <a href="/#">#YouTubeChannel</a></p>
            <img alt="" src="/images/feed-image-5.png" className="post-img" />
            <div className="post-row">
              <div className="activity-icons">
                <div><img alt="" src="/images/like.png" /> 120</div>
                <div><img alt="" src="/images/comments.png" /> 45</div>
                <div><img alt="" src="/images/share.png" /> 20</div>
              </div>
              <div className="post-profile-icon">
                <img alt="" src="/images/profile-pic.png" /> <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <button type="button" className="load-more-btn">Load More</button>
        </div>
        <div className="right-sidebar">
          <div className="sidebar-title">
            <h4>Events</h4>
            <a href="/#">See All</a>
          </div>
          <div className="event">
            <div className="left-event">
              <h3>18</h3>
              <span>March</span>
            </div>
            <div className="right-event">
              <h4>Social Media</h4>
              <p><i className="fa fa-map-marker"></i> Willson Tech Park</p>
              <a href="/#">More Info</a>
            </div>
          </div>
          <div className="event">
            <div className="left-event">
              <h3>22</h3>
              <span>June</span>
            </div>
            <div className="right-event">
              <h4>Mobile Marketing</h4>
              <p><i className="fa fa-map-marker"></i> Willson Tech Park</p>
              <a href="/#">More Info</a>
            </div>
          </div>
          <div className="sidebar-title">
            <h4>Advertisement</h4>
            <a href="/#">Close</a>
          </div>
          <img alt="" src="/images/advertisement.png" className="sidebar-ads" />
          <div className="sidebar-title">
            <h4>Conversation</h4>
            <a href="/#">Hide Chat</a>
          </div>
          <div className="online-list">
            <div className="online">
              <img alt="" src="/images/member-1.png" />
            </div>
            <p>Alison Mina</p>
          </div>
          <div className="online-list">
            <div className="online">
              <img alt="" src="/images/member-2.png" />
            </div>
            <p>Jackson Aston</p>
          </div>
          <div className="online-list">
            <div className="online">
              <img alt="" src="/images/member-3.png" />
            </div>
            <p>Samona Rose</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright 2022 - Mandhra Technology</p>
      </div>
    </div>
  );
}

export default App;
