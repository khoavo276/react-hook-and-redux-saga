import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import './style.scss';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [dropdownEmail, setDropdownEmail] = useState(false);

  const toggleEmail = () => setDropdownEmail((prevState) => !prevState);

  return (
    <div className="p-header">
      <nav class="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
        <form class="form-inline">
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>
        </form>

        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        <ul class="navbar-nav ml-auto align-items-center">
          <li class="nav-item dropdown no-arrow d-sm-none">
            <p
              class="nav-link dropdown-toggle"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-search fa-fw"></i>
            </p>

            <div
              class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li class="nav-item dropdown no-arrow mx-1">
            <p
              class="nav-link dropdown-toggle"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-bell fa-fw"></i>
              <span class="badge badge-danger badge-counter">3+</span>
            </p>
            <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 class="dropdown-header">Alerts Center</h6>
              <p class="dropdown-item d-flex align-items-center">
                <div class="mr-3">
                  <div class="icon-circle bg-primary">
                    <i class="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 12, 2019</div>
                  <span class="font-weight-bold">A new monthly report is ready to download!</span>
                </div>
              </p>
              <p class="dropdown-item d-flex align-items-center">
                <div class="mr-3">
                  <div class="icon-circle bg-success">
                    <i class="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </p>
              <p class="dropdown-item d-flex align-items-center">
                <div class="mr-3">
                  <div class="icon-circle bg-warning">
                    <i class="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your account.
                </div>
              </p>
              <p class="dropdown-item text-center small text-gray-500">Show All Alerts</p>
            </div>
          </li>

          <li class="nav-item dropdown no-arrow mx-1 c-dropEmail">
            <Dropdown isOpen={dropdownEmail} toggle={toggleEmail}>
              <DropdownToggle className="c-btn_profile" caret>
                <p
                  class="nav-link dropdown-toggle"
                  id="messagesDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-envelope fa-fw"></i>
                  <span class="badge badge-danger badge-counter">7</span>
                </p>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="c-dropdown_item">
                  <h6 class="dropdown-header">Message Center</h6>
                </DropdownItem>

                <DropdownItem className="c-dropdown_item">
                  <p class="dropdown-item d-flex align-items-center drop_item">
                    <div class="dropdown-list-image flex-shrink-0 mr-3">
                      <img
                        class="rounded-circle c-dropEmail_avt"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        alt=""
                      />
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="font-weight-bold">
                      <p class="text-truncate">
                        Hi there! I am wondering if you can help me with a problem I've been having.
                      </p>
                      <p class="small text-gray-500">Emily Fowler · 58m</p>
                    </div>
                  </p>
                </DropdownItem>

                <DropdownItem className="c-dropdown_item">
                  <p class="dropdown-item d-flex align-items-center drop_item">
                    <div class="dropdown-list-image flex-shrink-0 mr-3">
                      <img
                        class="rounded-circle c-dropEmail_avt"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        alt=""
                      />
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="font-weight-bold">
                      <p class="text-truncate">
                        Hi there! I am wondering if you can help me with a problem I've been having.
                      </p>
                      <p class="small text-gray-500">Emily Fowler · 58m</p>
                    </div>
                  </p>
                </DropdownItem>

                <DropdownItem className="c-dropdown_item">
                  <p class="dropdown-item d-flex align-items-center drop_item">
                    <div class="dropdown-list-image flex-shrink-0 mr-3">
                      <img
                        class="rounded-circle c-dropEmail_avt"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        alt=""
                      />
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="font-weight-bold">
                      <p class="text-truncate">
                        Hi there! I am wondering if you can help me with a problem I've been having.
                      </p>
                      <p class="small text-gray-500">Emily Fowler · 58m</p>
                    </div>
                  </p>
                </DropdownItem>

                <DropdownItem className="c-dropdown_item">
                  <p class="dropdown-item d-flex align-items-center drop_item">
                    <div class="dropdown-list-image flex-shrink-0 mr-3">
                      <img
                        class="rounded-circle c-dropEmail_avt"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        alt=""
                      />
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="font-weight-bold">
                      <p class="text-truncate">
                        Hi there! I am wondering if you can help me with a problem I've been having.
                      </p>
                      <p class="small text-gray-500">Emily Fowler · 58m</p>
                    </div>
                  </p>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 class="dropdown-header">Message Center</h6>
              <p class="dropdown-item d-flex align-items-center">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" src="img/undraw_profile_1.svg" alt="" />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div class="font-weight-bold">
                  <div class="text-truncate">
                    Hi there! I am wondering if you can help me with a problem I've been having.
                  </div>
                  <div class="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </p>
              <p class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" src="img/undraw_profile_2.svg" alt="" />
                  <div class="status-indicator"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    I have the photos that you ordered last month, how would you like them sent to you?
                  </div>
                  <div class="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </p>
              <p class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" src="img/undraw_profile_3.svg" alt="" />
                  <div class="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    Last month's report looks great, I am very happy with the progress so far, keep up the good work!
                  </div>
                  <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </p>
              <p class="dropdown-item d-flex align-items-center">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even
                    if they aren't good...
                  </div>
                  <div class="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </p>
              <p class="dropdown-item text-center small text-gray-500">Read More Messages</p>
            </div>
          </li>

          <div class="topbar-divider d-none d-sm-block"></div>

          <li class="nav-item dropdown no-arrow">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle className="c-btn_profile" caret>
                <p
                  class="nav-link dropdown-toggle"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                  <img
                    class="img-profile rounded-circle"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    alt="avt"
                  />
                </p>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="c-dropdown_item">
                  <p class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </p>
                </DropdownItem>

                <DropdownItem className="c-dropdown_item">
                  <p class="dropdown-item" href="#">
                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </p>
                </DropdownItem>

                <DropdownItem className="c-dropdown_item">
                  <p class="dropdown-item mb-2" href="#">
                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </p>
                </DropdownItem>

                <DropdownItem className="c-dropdown_item">
                  <div class="dropdown-divider"></div>
                </DropdownItem>

                <DropdownItem className="c-dropdown_item">
                  <Link to="/login">
                    <p class="dropdown-item mb-2" href="#" data-toggle="modal" data-target="#logoutModal">
                      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </p>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
