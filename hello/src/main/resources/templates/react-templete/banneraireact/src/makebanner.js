import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import './makebanner.css';
// import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-image-editor/dist/tui-image-editor.css';
import { ImageEditor } from '@toast-ui/react-image-editor';


// 함수형 컴포넌트인 Login을 정의합니다.
const Makebanner = () => {
    const navigate = useNavigate ();

    const GoLogin = () => {
      navigate("/login");
    }
    const GoSignup = () => {
      navigate("/signup");
    }
    const GoSetting = () =>{
        navigate("/setting")
    }
    const ImageEditor = require('tui-image-editor');
    // const [image, setImage] = useState(null);
    
    const FileSaver = require('file-saver'); //to download edited image to local. Use after npm install file-saver
    // const blackTheme = require('./js/theme/black-theme.js');
    const locale_ru_RU = {
      // override default English locale to your custom
      Crop: 'Обзрезать',
      'Delete-all': 'Удалить всё',
      // etc...
    };
    useEffect(() => {
     
      const instance = new ImageEditor(document.querySelector('#tui-image-editor'), {
        includeUI: {
          loadImage: {
            path: './아리.PNG',
            name: 'SampleImage',
          },
          locale: locale_ru_RU,
          // theme: blackTheme, // or whiteTheme
          initMenu: 'filter',
          menuBarPosition: 'bottom',
        },
        cssMaxWidth: 700,
        cssMaxHeight: 500,
        selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70,
      },
    });
}, []);
    
    return(
    <body>
        <header>
            <div class="banner-header">

                <h2 class="banner-title">MAKEBANNER</h2>

                <div class="charts-see-all">

                    <a class="go-login" onClick={GoLogin}>
                        로그인
                    </a>

                    <a class="go-login" onClick={GoSignup}>
                        회원가입
                    </a>

                    <button class="go-start">
                        <a class="go-go" onClick={GoSetting}>
                            시작하기
                        </a>
                    </button>

                </div>

            </div>
        </header>

        <section>
            <div class="container">
                {/* <Editor
                    initialValue="hello react editor world!"
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="wysiwyg"
                    useCommandShortcut={false}
                /> */}
                <div id="tui-image-editor"></div>
            </div>



        
        </section>

        </body>
  );
};
export default Makebanner;