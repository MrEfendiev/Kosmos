import React from 'react'
import './App.css';
function Main() {
  return (

    <div className='Main'>
         <div class="naver">
    <div class="nav__content">
      <ul class="nav__list">
        <li class="nav__list-item"><a href="news.html">Новости</a></li>
        <li class="nav__list-item"><a href="roadmap.html">RoadMap</a></li>
        <li class="nav__list-item"><a href="team.html">Команда</a></li>
        <li class="nav__list-item"><a href="contact.html">Контакты</a></li>
      </ul>
    </div>
  </div>
  <div id="wrapper site-content">
    <div id="content">
      <header class="header-nav-center no_blur header-black active-blue">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light px-sm-0">
            <a class="navbar-brand" href="./index.html">
              <img class="logo" src="./assets/img/logo2svg.svg" alt="logo" />
            </a>
            <div class="menu-icon ml-3">
              <span class="menu-icon__line menu-icon__line-left"></span>
              <span class="menu-icon__line"></span>
              <span class="menu-icon__line menu-icon__line-right"></span>
            </div>

            <button class="navbar-toggler menu ripplemenu" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              {/* <svg viewBox="0 0 64 48">
                <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45s,37"></path>
              </svg> */}
            </button>

            <div class="collapse navbar-collapse">
              <ul class="navbar-nav mx-auto nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="index.html" style="color: #5F4BD9">МыКосмос</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="ico.html">Для ICO-инвесторов</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="ico_2.html">Для ICO-промоутеров</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="comocoin.html">CosmoCoin</a>
                </li>

              <li class="nav-item dropdown dropdown-hover">
                  <a class="nav-link dropdown-toggle dropdown_menu" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Blog

                    <div class="icon_arrow">
                      <i class="tio chevron_right"></i>
                    </div>

                  </a>
                  <div class="dropdown-menu single-drop sm_dropdown" aria-labelledby="navbarDropdown">
                    <ul class="dropdown_menu_nav">

                      <li class="dropdown-submenu dropdown-hover"><a
                          class="dropdown-item dropdown-toggle dropdown_menu d-flex justify-content-between" href="#">
                          Grid Layout
                          <div class="icon_arrow">
                            <i class="tio chevron_right"></i>
                          </div>
                        </a>
                        <ul class="dropdown-menu sec-drop">
                          <li><a class="dropdown-item" href="../blog/blog-classic.html">Blog: Classic</a></li>
                          <li><a class="dropdown-item" href="../blog/blog-classic-three-columen.html">
                              Blog: Classic 3 Column</a></li>
                          <li><a class="dropdown-item" href="../blog/blog-creative.html">Blog: Creative</a></li>
                          <li><a class="dropdown-item" href="../blog/blog-standard.html">Blog: Standard</a></li>
                        </ul>
                      </li>

                      <li class="dropdown-submenu dropdown-hover"><a
                          class="dropdown-item dropdown-toggle dropdown_menu d-flex justify-content-between" href="#">
                          Single Post
                          <div class="icon_arrow">
                            {/* <i class="tio chevron_right"></i> */}
                          </div>
                        </a>
                        <ul class="dropdown-menu sec-drop">
                          <li><a class="dropdown-item" href="single-blog.html">Creative</a></li>
                          <li><a class="dropdown-item" href="single-featured-image.html">Featured Image</a></li>
                          <li><a class="dropdown-item" href="single-background-color.html">Background Color</a>
                          </li>
                        </ul>
                      </li>

                    </ul>

                  </div>
                </li> 

              </ul>
              <div class="nav_account">
                <a href="/registration.html" class="btn btn_sm_primary filter-blur c-white border-0 rounded-8">
                  Авторизация
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main data-spy="scroll" data-target="#navbar-example2" data-offset="0">

        <section class="pt_banner_inner banner_app_two">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-lg-3">
                <div class="app_banner" style="margin-left: -50px;">
                </div>
              </div>
              <div class="col-md-8 col-lg-6 my-auto" style="margin-left: -10px;">
                <div class="banner_title">
                  <div class="offer filter-blur">
                    <div class="row">
                      <div class="offerser ml-4">
                        <h3 style="margin-bottom: 0px !important">87</h3>
                        <span>дней</span>
                      </div>
                      <div class="leniers ml-4">
                      </div>
                      <div class="offerser ml-4">
                        <h3 style="margin-bottom: 0px !important">14</h3>
                        <span>часов</span>
                      </div>
                      <div class="leniers ml-4">
                      </div>
                      <div class="offerser ml-4">
                        <h3 style="margin-bottom: 0px !important">22</h3>
                        <span>минут</span>
                      </div>
                      <div class="leniers ml-4">
                      </div>
                      <div class="offerser ml-4 mr-4">
                        <h3 style="margin-bottom: 0px !important">37</h3>
                        <span>секунд</span>
                      </div>
                    </div>
                  </div>
                  <h1>
                    <span style="color: #5F4BD9">МЫ</span>КОСМОС
                  </h1>
                  <p>СОЦИАЛЬНАЯ СЕТЬ БУДУЩЕГО
                  </p>
                </div>
                <div class="button_app padding-t-2">
                  <a href="#Download" class="btn btn_with_ico">
                    <span>Создать аккаунт</span>
                  </a>
                  <div class="c-gray mt-4">
                    <span>Социальаня сеть 3.0, с использованием технологии Blockchain.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="services_section ss_1 hosting_service service_three padding-t-12">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-lg-3 item">
                <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="0">
                  <div class="icon--top">
                    {/* <svg id="Stockholm-icons-_-General-_-Thunder-move"
                      data-name="Stockholm-icons-/-General-/-Thunder-move" xmlns="http://www.w3.org/2000/svg" width="24"
                      height="24" viewBox="0 0 24 24">
                      <rect id="Rectangle-10" width="24" height="24" fill="none" />
                      <path id="Path-3"
                        d="M16.374,19.939l5.849-8.773A.75.75,0,0,0,21.6,10H17V4.477a.75.75,0,0,0-1.374-.416L9.777,12.834A.75.75,0,0,0,10.4,14H15v5.523a.75.75,0,0,0,1.374.416Z"
                        fill="#fff" fill-rule="evenodd" />
                      <path id="Combined-Shape"
                        d="M4.5,5h5a1.5,1.5,0,0,1,0,3h-5a1.5,1.5,0,0,1,0-3Zm0,12h5a1.5,1.5,0,0,1,0,3h-5a1.5,1.5,0,0,1,0-3Zm-2-6h4a1.5,1.5,0,0,1,0,3h-4a1.5,1.5,0,0,1,0-3Z"
                        fill="#fff" fill-rule="evenodd" opacity="0.3" />
                    </svg> */}
                  </div>
                  <div class="txt">
                    <h3>Удобство использования</h3>
                    <p>
                      Интуитивно удобный доступ к новым форматам контента.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-3 item mx-auto">
                <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="100">
                  <div class="icon--top">
                    {/* <svg width="68" height="68" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.65761 10.2419C7.77191 9.91936 8.22809 9.91936 8.34239 10.2419L8.65494 11.124C8.69152 11.2272 8.77275 11.3085 8.87601 11.3451L9.75807 11.6576C10.0806 11.7719 10.0806 12.2281 9.75807 12.3424L8.87601 12.6549C8.77275 12.6915 8.69152 12.7728 8.65494 12.876L8.34239 13.7581C8.22809 14.0806 7.77191 14.0806 7.65761 13.7581L7.34506 12.876C7.30848 12.7728 7.22725 12.6915 7.12399 12.6549L6.24193 12.3424C5.91936 12.2281 5.91936 11.7719 6.24193 11.6576L7.12399 11.3451C7.22725 11.3085 7.30848 11.2272 7.34506 11.124L7.65761 10.2419Z" fill="#363853"/>
                      <path d="M12.6576 15.2419C12.7719 14.9194 13.2281 14.9194 13.3424 15.2419L13.6549 16.124C13.6915 16.2272 13.7728 16.3085 13.876 16.3451L14.7581 16.6576C15.0806 16.7719 15.0806 17.2281 14.7581 17.3424L13.876 17.6549C13.7728 17.6915 13.6915 17.7728 13.6549 17.876L13.3424 18.7581C13.2281 19.0806 12.7719 19.0806 12.6576 18.7581L12.3451 17.876C12.3085 17.7728 12.2272 17.6915 12.124 17.6549L11.2419 17.3424C10.9194 17.2281 10.9194 16.7719 11.2419 16.6576L12.124 16.3451C12.2272 16.3085 12.3085 16.2272 12.3451 16.124L12.6576 15.2419Z" fill="#363853"/>
                      <path d="M13.9796 5.36772C14.1533 4.87743 14.8467 4.87743 15.0204 5.36772L15.6158 7.04814C15.6715 7.20508 15.7949 7.32855 15.9519 7.38415L17.6323 7.97958C18.1226 8.15331 18.1226 8.84669 17.6323 9.02042L15.9519 9.61585C15.7949 9.67146 15.6715 9.79492 15.6158 9.95186L15.0204 11.6323C14.8467 12.1226 14.1533 12.1226 13.9796 11.6323L13.3842 9.95186C13.3285 9.79492 13.2051 9.67146 13.0481 9.61585L11.3677 9.02042C10.8774 8.84669 10.8774 8.15331 11.3677 7.97958L13.0481 7.38415C13.2051 7.32855 13.3285 7.20508 13.3842 7.04814L13.9796 5.36772Z" fill="#363853"/>
                    </svg> */}
                  </div>
                  <div class="txt">
                    <h3>Легкость применения</h3>
                    <p>
                      Простота использования изначально сложных инструментов и технологий.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-3 item">
                <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="200">
                  <div class="icon--top">
                    {/* <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9703 3.3437C13.0166 2.88543 10.9834 2.88543 9.02975 3.3437C6.20842 4.00549 4.0055 6.20841 3.3437 9.02975C2.88543 10.9834 2.88543 13.0166 3.3437 14.9703C4.0055 17.7916 6.20842 19.9945 9.02975 20.6563C10.9834 21.1146 13.0166 21.1146 14.9703 20.6563C17.7916 19.9945 19.9945 17.7916 20.6563 14.9703C21.1146 13.0166 21.1146 10.9834 20.6563 9.02975C19.9945 6.20842 17.7916 4.00549 14.9703 3.3437ZM12 7.57085C12.3314 7.57085 12.6 7.83948 12.6 8.17085V9.59335C12.6 9.92472 12.3314 10.1933 12 10.1933C11.6686 10.1933 11.4 9.92472 11.4 9.59335V8.17085C11.4 7.83948 11.6686 7.57085 12 7.57085ZM15.8357 9.78543C16.0014 10.0724 15.9031 10.4394 15.6161 10.605L14.3843 11.3162C14.0973 11.4819 13.7304 11.3836 13.5647 11.0966C13.399 10.8096 13.4973 10.4427 13.7843 10.277L15.0161 9.56581C15.3031 9.40013 15.6701 9.49845 15.8357 9.78543ZM8.16424 9.78543C8.32992 9.49845 8.69688 9.40013 8.98385 9.56581L10.2158 10.2771C10.5027 10.4427 10.6011 10.8097 10.4354 11.0967C10.2697 11.3836 9.90274 11.482 9.61577 11.3163L8.38385 10.605C8.09688 10.4394 7.99855 10.0724 8.16424 9.78543ZM10.4354 12.9033C10.6011 13.1903 10.5027 13.5573 10.2158 13.7229L8.98385 14.4342C8.69688 14.5999 8.32992 14.5015 8.16424 14.2146C7.99855 13.9276 8.09688 13.5606 8.38385 13.395L9.61577 12.6837C9.90274 12.518 10.2697 12.6164 10.4354 12.9033ZM13.5647 12.9034C13.7304 12.6164 14.0973 12.5181 14.3843 12.6838L15.6161 13.395C15.9031 13.5606 16.0014 13.9276 15.8357 14.2146C15.6701 14.5015 15.3031 14.5999 15.0161 14.4342L13.7843 13.723C13.4973 13.5573 13.399 13.1904 13.5647 12.9034ZM12 13.8068C12.3314 13.8068 12.6 14.0754 12.6 14.4068V15.8291C12.6 16.1605 12.3314 16.4291 12 16.4291C11.6686 16.4291 11.4 16.1605 11.4 15.8291L11.4 14.4068C11.4 14.0754 11.6686 13.8068 12 13.8068Z" fill="#363853"/>
                    </svg> */}
                  </div>
                  <div class="txt">
                    <h3>Простота монетизации</h3>
                    <p>Новые возможности по монетизации аккаунта и размещаемого контента.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section class="services_section ss_2 hosting_service service_three padding-t-12">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-lg-3 item">
                <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="0">
                  <div class="icon--top">
                  
                  </div>
                  <div class="txt">
                    <h3>Универсальность платформы</h3>
                    <p>
                      Полный перечень наиболее форматов и возможностей в одном приложении.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-3 item mx-auto">
                <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="100">
                  <div class="icon--top">
                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02975C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM12.5743 9.12815C12.5743 8.81093 12.3172 8.55377 12 8.55377C11.6828 8.55377 11.4256 8.81093 11.4256 9.12815L11.4256 13.9146C11.4256 14.2318 11.6828 14.4889 12 14.4889C12.3172 14.4889 12.5743 14.2318 12.5743 13.9146V9.12815ZM9.70249 11.0427C9.70249 10.7255 9.44533 10.4683 9.12812 10.4683C8.8109 10.4683 8.55374 10.7255 8.55374 11.0427V14.8719C8.55374 15.1891 8.8109 15.4462 9.12812 15.4462C9.44533 15.4462 9.70249 15.1891 9.70249 14.8719V11.0427ZM15.4462 12C15.4462 11.6828 15.1891 11.4256 14.8718 11.4256C14.5546 11.4256 14.2975 11.6828 14.2975 12V14.8719C14.2975 15.1891 14.5546 15.4462 14.8718 15.4462C15.1891 15.4462 15.4462 15.1891 15.4462 14.8719V12Z" fill="#363853"/>
                    </svg> */}
                  </div>
                  <div class="txt">
                    <h3>Доступность токеномики</h3>
                    <p>
                      Интеграция крипто-инструментов в функции социальной сети.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-3 item">
                <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="200">
                  <div class="icon--top">
                    {/* <svg id="Stockholm-icons-_-Layout-_-Layout-grid" data-name="Stockholm-icons-/-Layout-/-Layout-grid"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <rect id="bound" width="24" height="24" fill="none" />
                      <rect id="Rectangle-7" width="4" height="4" rx="1" transform="translate(4 4)" fill="#fff"
                        opacity="0.3" />
                      <path id="Combined-Shape"
                        d="M5,10H7a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11A1,1,0,0,1,5,10Zm6-6h2a1,1,0,0,1,1,1V7a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V5A1,1,0,0,1,11,4Zm0,6h2a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V11A1,1,0,0,1,11,10Zm6-6h2a1,1,0,0,1,1,1V7a1,1,0,0,1-1,1H17a1,1,0,0,1-1-1V5A1,1,0,0,1,17,4Zm0,6h2a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H17a1,1,0,0,1-1-1V11A1,1,0,0,1,17,10ZM5,16H7a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17A1,1,0,0,1,5,16Zm6,0h2a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V17A1,1,0,0,1,11,16Zm6,0h2a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H17a1,1,0,0,1-1-1V17A1,1,0,0,1,17,16Z"
                        fill="#fff" fill-rule="evenodd" />
                    </svg> */}

                  </div>
                  <div class="txt">
                    <h3>Широта аудитории</h3>
                    <p>Объединение ментально разных аудиторий на единой площадке.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-md-8  mb-5">
                <div class="title_sections">
                  <h3>Структура социальной сети</h3>
                </div>
                <div class="c-gray mt-1">
                  <span>Социальная сеть «МыКосмос» будет состоять из следующих функциональных разделов и элементов:</span>
                </div>
              </div>
            </div>
            <div class="row justify-content-center mt-4">
              <div class="col-md-5 col-lg-4">
                <div class="slider_mobile_ap">
                    
                  {/* <!-- <div class="active-btn-block-modal">
                    <p type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                      Подробнее
                    </p>
                  </div>
                  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">Основные функции раздела:</h5>
                          <p>Лайк, поделиться, сохранение в избранное</p>
                          <span class="span-modal-block"></span>
                          <p>Лайк, поделиться, сохранение в избранное</p>
                          <span class="span-modal-block"></span>
                          <p>Лайк, поделиться, сохранение в избранное</p>
                          <span class="span-modal-block"></span>
                          <p>Лайк, поделиться, сохранение в избранное</p>
                          <span class="span-modal-block"></span>
                          <p>Лайк, поделиться, сохранение в избранное</p>
                          <span class="span-modal-block"></span>
                          <p>Лайк, поделиться, сохранение в избранное</p>
                        </div>
                        <div class="modal-body">
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div> --> */}
                  <div class="swiper-container swiper_vertical mh-50 oh">
                  
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                       
                        <div class="app_image">
                         
                        </div>   
                        
                 
                     
                                          
                      </div>
                      <div class="swiper-slide">
                        <div class="app_image">
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="app_image">
                        </div>
                      </div>
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-lg-4 my-lg-auto offset-lg-1">
                <div class="item_block" data-aos="fade-up" data-aos-delay="0">
                  <div class="media">
                    <div class="ioco">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20.337" viewBox="0 0 18 20.337">
                        <g id="Group_6443" data-name="Group 6443" transform="translate(-3 -2)">
                          <path id="Combined-Shape"
                            d="M5.747,13.043A6,6,0,1,1,14.811,6.5H17.25a3.75,3.75,0,0,1,0,7.5h-9A3.736,3.736,0,0,1,5.747,13.043Z"
                            fill="#fff" fill-rule="evenodd" opacity="0.3" />
                          <path id="Shape"
                            d="M11.129,15.734V17.69H9.121a.5.5,0,0,0-.5.5v1.023a.5.5,0,0,0,.5.5h2.008V21.67a.5.5,0,0,0,.823.382l3.506-2.968a.5.5,0,0,0,0-.763l-3.506-2.968a.5.5,0,0,0-.823.382Z"
                            transform="translate(30.621 6.702) rotate(90)" fill="#fff" />
                        </g>
                      </svg> */}

                    </div>
                    <div class="media-body">
                      <div class="txt">
                        <span>Для физических лиц</span>
                        <h3>Частный аккаунт</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item_block" data-aos="fade-up" data-aos-delay="100">
                  <div class="media">
                    <div class="ioco">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24.195" height="24" viewBox="0 0 24.195 24">
                        <g id="Stockholm-icons-_-Shopping-_-Money" data-name="Stockholm-icons-/-Shopping-/-Money"
                          transform="translate(0.195)">
                          <rect id="bound" width="24" height="24" fill="none" />
                          <path id="Combined-Shape-Copy"
                            d="M2,6H21a1,1,0,0,1,1,1V17a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V7A1,1,0,0,1,2,6Zm9.5,10a4,4,0,1,0-4-4A4,4,0,0,0,11.5,16Z"
                            transform="matrix(0.966, 0.259, -0.259, 0.966, 3.498, -2.568)" fill="#fff"
                            fill-rule="evenodd" opacity="0.3" />
                          <path id="Combined-Shape"
                            d="M2,6H21a1,1,0,0,1,1,1V17a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V7A1,1,0,0,1,2,6Zm9.5,10a4,4,0,1,0-4-4A4,4,0,0,0,11.5,16Zm0-2a2,2,0,1,0-2-2A2,2,0,0,0,11.5,14Z"
                            fill="#fff" fill-rule="evenodd" />
                        </g>
                      </svg> */}
                    </div>
                    <div class="media-body">
                      <div class="txt">
                        <span>Для аккаунтов, создающихся вокруг какого-либо интереса или категории контента</span>
                        <h3>Сообщество</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item_block mb-0" data-aos="fade-up" data-aos-delay="200">
                  <div class="media">
                    <div class="ioco">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20.337" viewBox="0 0 18 20.337">
                        <g id="Group_6443" data-name="Group 6443" transform="translate(-3 -2)">
                          <path id="Combined-Shape"
                            d="M5.747,13.043A6,6,0,1,1,14.811,6.5H17.25a3.75,3.75,0,0,1,0,7.5h-9A3.736,3.736,0,0,1,5.747,13.043Z"
                            fill="#fff" fill-rule="evenodd" opacity="0.3" />
                          <path id="Shape"
                            d="M11.129,15.734V17.69H9.121a.5.5,0,0,0-.5.5v1.023a.5.5,0,0,0,.5.5h2.008V21.67a.5.5,0,0,0,.823.382l3.506-2.968a.5.5,0,0,0,0-.763l-3.506-2.968a.5.5,0,0,0-.823.382Z"
                            transform="translate(30.621 6.702) rotate(90)" fill="#fff" />
                        </g>
                      </svg> */}
                      

                    </div>
                    <div class="media-body">
                      <div class="txt">
                        <span>Для юридических лиц</span>
                        <h3>Бизнес аккаунт</h3>

                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          


     

      </div>


        <div class="auditoria__blocks-Container">
          <div class="auditoria__blocks-flex">
            <div className='auditoria__user'>
              <h3 class="auditoria__user-title">Масштабирование</h3>
                <p class="auditoria__user-text">Вывод социальной сети на международный уровень, глобальное продвижение и охват новой аудитории за пределами русскоязычного сегмента.</p>
          </div>
          <div className='auditoria__user'>
            <h3 class="auditoria__user-title">Cosmo-Coin 2.0</h3>
                <p class="auditoria__user-text">Запуск новой криптовалюты, создаваемой на основе принципа Proof of Work. Выпуск собственных карт для майнинга. Запуск процесса Token Swap, подразумевающий справедливый обмен и полное замещение изначальной Cosmo-Coin.</p>
          </div>
          <div className='auditoria__user'>
            <h3 class="auditoria__user-title">Мета-вселенная</h3>
                <p class="auditoria__user-text">Создание нового захватывающего цифрового мира, реализованный с использованием технологии Blockchain/WEB 3.0, в котором пользователи смогут жить полноценной виртуальной жизнью.</p>
          </div>

          </div>

        </div>




        <section class="download_app_ho padding-t-12" id="Download">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-5 text-center">
                <div class="title_sections">
                  <h2>Let's have fun together!</h2>
                </div>
                <div class="app-mobile-btn" data-aos="fade-up" data-aos-delay="0">
                  <a href="#" target="_blank" class="btn btn_apple">
                    <div class="media">
                      <div class="txt">
                        <span>Download on the</span>
                        <p>Apple Store</p>
                      </div>
                      <div class="media-body my-auto">
                        <div class="icoon">
                          {/* <i class="tio apple"></i> */}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
              <div class="col-12">
                <div class="ho_ap" data-aos="fade-up" data-aos-delay="100">
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer class="sh_footer_email margin-t-12 padding-b-8">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="email_logo">
                <div class="media">
                  <a href="mobile-app-2.html" class="brand_logo my-auto">
                  </a>
                  <div class="media-body my-auto">
                    <div class="txt">
                      <span>Есть вопросы? Напишите нам</span>
                      <a href="mailto:info@cinema.com">
                        info@wecosmos.ru
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-lg-4 ml-auto text-lg-right mt-auto">
              <a href="#Testimonial" class="btn-social c-white color-behance border-0 mb-0 mr-2">
                <i class="tio behance"></i>
              </a>
              <a href="#Testimonial" class="btn-social c-white color-instagram border-0 mb-0 mr-2">
                <i class="tio instagram"></i>
              </a>
              <a href="#Testimonial" class="btn-social c-white color-tik_tok border-0 mb-0 mr-2">
                <i class="tio tik_tok"></i>
              </a>
              <a href="#Testimonial" class="btn-social c-white color-youtube border-0 mb-0 mr-2">
                <i class="tio youtube"></i>
              </a>
            </div> */}
          </div>
          <div class="dividar"></div>
          <div class="row">
            <div class="col-md-5 col-lg-4">
              <div class="copyright">
                <p>© 2022 <a href="https://themeforest.net/user/orinostu" target="_blank">WECOSMOS.</a> All Right
                  Reseved</p>
              </div>
            </div>
            <div class="col-md-7 col-lg-8">
              <ul class="nav justify-content-md-end">
                <li class="nav-item">
                  <a class="nav-link" href="#">История</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">RoadMap</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Команда</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Новости</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Связаться с нами</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
{/* 
    <div class="modal mdll_video fade" id="mdllVideo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <button type="button" class="close bbt_close ripple_circle" data-dismiss="modal" aria-label="Close">
        <i class="tio clear"></i>
      </button>
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="" id="video" allowscriptaccess="always"
                allow="autoplay"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div class="prgoress_indicator">
      <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div> */}



    {/* <section class="loading_overlay">
      <div class="loader_logo">
        <img class="logo" src="./assets/img/logo.svg" />
      </div>
    </section> */}
  </div>
    </div>
  )
}

export default Main