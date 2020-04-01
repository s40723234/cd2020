var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Weeks', 'text': '', 'tags': '', 'url': 'Weeks.html'}, {'title': 'week01-05', 'text': 'week01-建倉儲 \n 1.下載可攜系統 \n 2.建一個新倉儲“ cd2020” \n 3.進入tmp \n 4.git clone\xa0\xa0 https://github.com/s40723234/cd2020.git \n 5.git子模塊添加 https://github.com/mdecourse/cmsimde.git \n 6.進入cmsimde，輸入python -m pip install flask_cors \n 7.開始編輯倉儲 \n 8.處理結束，git status> git add。 > git commit -m“標題”> git push \n 9.開啟github倉儲設定，點選要推進的分支 \n week1更新python 3.8.2 \n 1.下載3.8.2安裝檔 \n 2.開啟點擊自定義安裝\xa0 \n 3.取消點 \n 4.改路徑至Y槽“ py382” \n 5.開編輯器開“ start_mdecourse.bat” \n 6.將檔中的py373全部改成py382，重新啟動 \n 7.於Y槽中執行，python get-pip.py來安裝pip \n 8.完成之後，來安裝兩端，輸入pip install flask \n 9. lxml .bs4 .flask_cors .pelican .leo \n week2-分組 \n 以下是直播影片： \n \n assignment1-可攜系統 \n step001-先在隨身碟底下創一個CD2020的資料夾，並在裡面創一個data \n step002-在數據下添加資料夾，分別有PortableGit / msys2 / python777 / wscite666 /\xa0 \xa0 tmp / home \n step003-PortableGit \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa01.  適用於Windows Portable的 https://git-scm.com/download/win 下載 64位\xa0 Git\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa02.安裝到CD2020 / data / PortableGit\xa0 \n step004-  MSYS2 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 1.\xa0  https://www.msys2.org/  \xa0下載msys2-x86_64-20190524.exe\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa02.安裝檔案到CD2020 / data / msys2 \n \xa0step005-python777 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 1.\xa0  https://www.python.org/downloads/release/python-382/  \xa0下載Windows\xa0 x86- 64可執行安裝程序 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2. 安裝並複制檔案到CD2020 / data / python777 \n steo006-wscite666 \n \xa0 \xa0 \xa0 \xa0 \xa0 1.到\xa0  https://www.scintilla.org/SciTEDownload.html  \xa0下載完整的64位下載\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa02.解壓縮檔案到 CD2020/data/wscite237輯器執行的 Scite.exe\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa03.打開 Options 下的 Global Options File 其中的預設值 code.page=0 修改設定 為\xa0 code.page=65001，將 load.on.activate=1 前面的井字號拿掉 \n step007 - home \n \xa0 \xa0 \xa0 \xa0 \xa0 1.到2019fall/data/home\xa0 copy\xa0 \xa0.gitconfig paste home\xa0 \n step008 - tcc \n \xa0 \xa0 \xa0 \xa0 \xa01.到\xa0 https://github.com/TinyCC/tinycc \xa0接著到命令提示字元裡 git\xa0 \xa0 clone\xa0 https://github.com/TinyCC/tinycc.git \xa0tcc \n step009 - Jupyterlab \n \xa0 \xa0 \xa0 \xa0 \xa01.命令提示字元裡 pip install jupyterlab==2.0.1 自動安裝 \n step010 - Fossil SCM \n \xa0 \xa0 \xa0 \xa01.到\xa0 https://www.fossil-scm.org/home/doc/trunk/www/index.wiki 下載fossil scm \n \xa0 \xa0 \xa0 \xa0 2. 解壓到 CD2020/data \n step011 - Flutter \n \xa0 \xa0 \xa0 \xa0 1.  https://github.com/flutter/flutter  \xa0裡 接著到命令提示字元里git\xa0\xa0 clone https://github.com/flutter/flutter.git -b穩定 \n step012-vscode \n \xa0 \xa0 \xa0 \xa01.  https://github.com/microsoft/vscode  \xa0接下來到命令提示字元里git\xa0 clone https://github.com/microsoft/vscode.git vscode \n step013-tmp \n \xa0 \xa0 \xa0 \xa0 1.git clone自己的倉儲 \n \xa0 \xa0 \xa0 \xa0 2.安裝pip和cmsimde所需模組 \n step014-  \n \xa0 \xa0 \xa0 \xa01.先到\xa0  https://bootstrap.pypa.io/get-pip.py  \xa0下載get-pip.py，並用程式碼自動 載入 \n \n 以下是影片 \n https://www.youtube.com/watch?v=XbHZMnWAvQI (開cc字幕) \n \n \n google 雲端 \n cd2020隨身系統下載 \n https://drive.google.com/drive/folders/1s1QXRshHjpgnLKZeQhqlgytk1qDL7aG4?usp=sharing \n', 'tags': '', 'url': 'week01-05.html'}, {'title': 'week06-09', 'text': '\n', 'tags': '', 'url': 'week06-09.html'}, {'title': 'week10-14', 'text': '', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};