//for fetch data dynamic menu
function fetchDataAndPopulate() {
    fetch('assets/json/dynamicmenu.json')
        .then(response => response.json())
        .then(data => {
            if (window.innerWidth > 876) {
                data.unshift({});
                for (let i = 0; i < 3; i++) {
                    data.push({});
                }
            }
            else {
                data = data.filter(obj => Object.keys(obj).length > 0);
            }

            const navItems = document.querySelectorAll('#dynamic_nav-items li a');
            const leftElement = document.querySelector('.left');
            const middleElement = document.querySelector('.middle');
            const rightElement = document.querySelector('.right');
            const navContainer = document.querySelector('.nav-items');
            const itemCollector = document.querySelector('.item-collector');
            const itemCollectorUL = document.querySelectorAll('.item-collector ul li a');
            const navItemCollector = document.querySelector('#nav-item-collector');
            const backButton = document.getElementById('back-menu-btn');
            const Scrim =  document.querySelector('.scrim');
            const headermiddle = document.querySelector('header .middle-section');
            const headerbottom = document.querySelector('header .bottom-section');

            let isNavContainerHovered = false;
            let hideTimeout;
            if (window.innerWidth > 876) {
                navContainer.addEventListener('mouseenter', function () {
                    clearTimeout(hideTimeout);
                    isNavContainerHovered = true;
                    if (isNavContainerHovered) {
                        navContainer.classList.add('visible');
                        Scrim.style.display = "block";
                        Scrim.style.visibility = "visible";
                        headermiddle.style.filter = "blur(10px)";
                        headerbottom.style.filter = "blur(10px)";
                        navContainer.classList.remove('hide');
                    }
                });
            }

            if (window.innerWidth > 876) {
                navContainer.addEventListener('mouseleave', function () {
                    isNavContainerHovered = false;
                    hideTimeout = setTimeout(() => {
                        if (!isNavContainerHovered) {
                            navContainer.classList.add('hide');
                            Scrim.style.display = "none";
                            Scrim.style.visibility = "hidden";
                            headermiddle.style.filter = "blur(0)";
                            headerbottom.style.filter = "blur(0)";
                            setTimeout(() => {
                                navContainer.classList.remove('visible');
                                navContainer.classList.remove('hide');
                                handleSearchButtonClick();
                            }, 200);
                        }
                    }, 0);
                });
            }

            var timeoutId;
            document.getElementById('searchInput').addEventListener('input', function () {
                clearTimeout(timeoutId);
                if (this.value.length > 0) {
                    timeoutId = setTimeout(function () {
                        showSearchButton();
                    }, 300);
                } else {
                    hideSearchButton();
                }

                var searchValue = this.value.toLowerCase();
                var quickLinksList = document.getElementById('quickLinksList');
                var listItems = quickLinksList.getElementsByTagName('li');

                for (var i = 0; i < listItems.length; i++) {
                    var listItem = listItems[i];
                    var linkText = listItem.querySelector('span').innerText.toLowerCase();
                    if (linkText.includes(searchValue)) {
                        listItem.style.display = 'list-item';
                    } else {
                        listItem.style.display = 'none';
                    }
                }

                var section = document.querySelector('.for-bottom');
                var visibleItems = quickLinksList.querySelectorAll('li[style="display: list-item;"]');
                section.style.display = visibleItems.length > 0 ? 'block' : 'none';
            });

            const searchInput = document.getElementById('searchInput');
            const updatePlaceholder = () => {
                if (window.innerWidth < 876) {
                    searchInput.placeholder = 'Search';
                } else {
                    searchInput.placeholder = 'Search apple.com';
                }
            };
            updatePlaceholder();
            window.addEventListener('resize', updatePlaceholder);

            function handleSearchButtonClick() {
                var section = document.querySelector('.for-bottom');

                searchInput.value = '';
                searchInput.focus();
                var listItems = document.getElementById('quickLinksList').getElementsByTagName('li');
                for (var i = 0; i < listItems.length; i++) {
                    listItems[i].style.display = 'list-item';
                }

                hideSearchButton();
                section.style.display = 'block';
            };
            const searchButton = document.getElementById('searchButton');

            searchButton.addEventListener('click', (e) => {
                e.preventDefault();
                handleSearchButtonClick();
            });

            function showSearchButton() {
                searchButton.style.display = 'flex';
                searchButton.style.opacity = '1';
            }

            function hideSearchButton() {
                searchButton.style.opacity = '0';
                setTimeout(function () {
                    searchButton.style.display = 'none';
                }, 300);
            }

            const handleNavItemClick = (index) => {
                const uniqueId = 'item_' + index;
                const storeData = data[index].store;
                const quickLinksData = data[index].quick_links;
                const shopSpecialData = data[index].shop_special_stores || { title: "", items: [] };

                populateMenu(storeData, leftElement, uniqueId);
                populateMenu(quickLinksData, middleElement, uniqueId);
                populateMenu(shopSpecialData, rightElement, uniqueId);
                document.querySelector('.row.one').style.display = 'flex';
                document.querySelector('.row.one').style.visibility = 'visible';
                document.querySelector('.row.two').style.display = 'none';
                document.querySelector('.row.two').style.display = 'none';
                navContainer.classList.add('visible');
                navContainer.classList.remove('hide');
                Scrim.style.display = "block";
                Scrim.style.visibility = "visible";
                headermiddle.style.filter = "blur(10px)";
                headerbottom.style.filter = "blur(10px)";
            };

            const handleBackButtonClick = () => {
                itemCollector.style.display = 'block';
                itemCollector.style.visibility = 'visible';
                navItemCollector.style.display = 'none';
                navItemCollector.style.visibility = 'hidden';
                backButton.style.display = 'none';
                backButton.style.visibility = 'hidden';
            };

            let clickedIndex = null;
            const quickLinksList = document.querySelector('.for-bottom ul');
            const forbottomh2 = document.querySelector('.for-bottom h2');
            if (window.innerWidth > 876) {
                navItems.forEach((item, index) => {
                    item.addEventListener('mouseenter', () => {
                        clearTimeout(hideTimeout);

                        if (index === 6 || index === 14 || (clickedIndex !== null && (index === 0 || index === 12 || index === 13))) {
                            return;
                        }

                        if (index === 0 || index === 12 || index === 13) {
                            isNavContainerHovered = false;
                            hideTimeout = setTimeout(() => {
                                if (!isNavContainerHovered) {
                                    navContainer.classList.add('hide');
                                    Scrim.style.display = "none";
                                    Scrim.style.visibility = "hidden";
                                    headermiddle.style.filter = "blur(0)";
                                    headerbottom.style.filter = "blur(0)";
                                    setTimeout(() => {
                                        navContainer.classList.remove('visible');
                                        navContainer.classList.remove('hide');
                                    }, 200);
                                }
                            }, 0);
                            return;
                        }
                        handleNavItemClick(index);
                    });

                    item.addEventListener('click', () => {
                        clearTimeout(hideTimeout);
                        clickedIndex = index;
                        if (index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8 || index === 9 || index === 10 || index === 11 || index === 14) {
                            return;
                        } else if (index === 12) {
                            forbottomh2.innerHTML = `Quick Links`;
                            quickLinksList.classList.add('quickLinksList_Search');
                            quickLinksList.classList.remove('quickLinksList_Bag');
                            quickLinksList.innerHTML =
                                `<li>
                            <a href="">
                                <i></i>
                                <span>The Apple Store Shopping Event</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>
                                <span>Find a Store</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>
                                <span>Apple Gift Card</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>
                                <span>Apple Vision Pro</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>
                                <span>Apple Trade In</span>
                            </a>
                        </li>`
                            navItemCollector.style.display = 'none';
                            document.querySelector('.row.one').style.visibility = 'hidden';
                            document.querySelector('.row.two').style.display = 'block';
                            document.querySelector('.row.two').style.visibility = 'visible';
                            document.querySelector('.row.two .for-top .form-section').style.display = 'block';
                            document.querySelector('.row.two .for-top .form-section').style.visibility = 'visible';
                            document.querySelector('.row.two .for-top .bag-section').style.display = 'none';
                            document.querySelector('.row.two .for-top .bag-section').style.visibility = 'hidden';
                        } else if (index === 13) {
                            forbottomh2.innerHTML = `My Profile`;
                            quickLinksList.classList.remove('quickLinksList_Search');
                            quickLinksList.classList.add('quickLinksList_Bag');
                            quickLinksList.innerHTML =
                                `<li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 25">
                                    <g>
                                        <rect fill="none"></rect>
                                        <path d="M14.5146,9.5234a2.56,2.56,0,0,0-1.11-1.4228l-4.25-2.3975a2.3909,2.3909,0,0,0-2.31,0l-4.25,2.3975a2.2971,2.2971,0,0,0-.6025.5107A2.2684,2.2684,0,0,0,1.4,10.1475v4.705a2.3546,2.3546,0,0,0,1.1953,2.0469l4.25,2.3975a2.3541,2.3541,0,0,0,2.31,0l4.25-2.3975A2.3546,2.3546,0,0,0,14.6,14.8525v-4.705A2.3322,2.3322,0,0,0,14.5146,9.5234ZM7.4,12.9453v5.2871L3.1851,15.8545a1.153,1.153,0,0,1-.585-1.002L2.603,10.24Zm.6-1.04L3.147,9.17a.4347.4347,0,0,1,.0385-.0244l1.7623-.9941,4.895,2.7158Zm5.4-1.666v4.6132a1.153,1.153,0,0,1-.585,1.002L8.6,18.2324V12.9453ZM8.5649,6.748l4.25,2.3975a.4347.4347,0,0,1,.0385.0244l-1.7842,1.0059L6.1733,7.46l1.2618-.712A1.1731,1.1731,0,0,1,8.5649,6.748Z" fill="6E6E73"></path>
                                    </g>
                                </svg>
                                <span>Orders</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 25">
                                    <g>
                                        <rect id="box_" fill="none"></rect>
                                        <path d="M10.3,5.15H5.7a2.3022,2.3022,0,0,0-2.3,2.3V19.0381a.8642.8642,0,0,0,.19.5869.67.67,0,0,0,.5313.2246.7441.7441,0,0,0,.438-.1465,4.8685,4.8685,0,0,0,.5366-.4765l2.8931-2.8858,2.9165,2.8867a6.4062,6.4062,0,0,0,.5307.4717.7286.7286,0,0,0,.4429.15.6684.6684,0,0,0,.5308-.2246.8619.8619,0,0,0,.19-.5869V7.45A2.3022,2.3022,0,0,0,10.3,5.15ZM4.6,7.45A1.102,1.102,0,0,1,5.7,6.35h4.6A1.102,1.102,0,0,1,11.4,7.45l-.0005,10.5781L8.832,15.4863a1.186,1.186,0,0,0-1.665.001L4.6,18.0293Z" fill="6E6E73"></path>
                                    </g>
                                </svg>                                               
                                <span>Your Saves</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 25">
                                    <g>
                                        <rect fill="none"></rect>
                                        <path d="M15.6094,12.3252a.5142.5142,0,0,0-.2959-.2959l-.5972-.2324a6.6665,6.6665,0,0,0-.16-.917l.4809-.42a.5172.5172,0,0,0-.3291-.9073l-.6372-.0136c-.0654-.1377-.1343-.2784-.2139-.4151s-.1635-.2636-.2519-.3935l.3076-.5576a.517.517,0,0,0-.62-.7393l-.6035.2051a6.68,6.68,0,0,0-.7134-.5977l.0986-.6328a.5172.5172,0,0,0-.43-.5918.54.54,0,0,0-.4052.1084l-.5015.4033A6.911,6.911,0,0,0,9.87,6.01l-.124-.6328a.5178.5178,0,0,0-.9512-.167l-.333.5507a7.2576,7.2576,0,0,0-.92.0039L7.2056,5.207a.518.518,0,0,0-.9512.167l-.125.6377a6.6192,6.6192,0,0,0-.8652.31l-.501-.4063a.5176.5176,0,0,0-.8364.4834l.0991.6358a6.6073,6.6073,0,0,0-.7017.5947L2.71,7.417a.5173.5173,0,0,0-.6211.7392l.3134.5694a6.7192,6.7192,0,0,0-.4653.7959l-.6421.0117a.516.516,0,0,0-.5083.5264.52.52,0,0,0,.1763.38l.4849.4238a6.8261,6.8261,0,0,0-.16.9111l-.6006.23a.5176.5176,0,0,0-.001.9658l.5972.2324a6.6665,6.6665,0,0,0,.16.917l-.4809.419a.5184.5184,0,0,0-.05.7314.52.52,0,0,0,.3789.1758l.6367.0137c.063.1318.1333.2754.2144.416.0673.1172.143.2246.2163.3281l.04.0566-.312.5664a.5176.5176,0,0,0,.2036.7032.52.52,0,0,0,.416.0361l.5967-.2031a6.82,6.82,0,0,0,.7207.5937l-.0991.6348a.5153.5153,0,0,0,.0933.3857.5187.5187,0,0,0,.7421.0977l.5064-.4082a6.6137,6.6137,0,0,0,.8628.3193l.1245.6358a.5139.5139,0,0,0,.22.33.53.53,0,0,0,.3877.0782.5193.5193,0,0,0,.3433-.24l.3388-.56.0577.0049a4.8076,4.8076,0,0,0,.7871.0019l.0669-.0058.3383.5625a.518.518,0,0,0,.9512-.167l.1245-.6348a6.6152,6.6152,0,0,0,.8589-.3193l.5088.4131a.5176.5176,0,0,0,.8364-.4834l-.0991-.6358a6.6173,6.6173,0,0,0,.7017-.5947l.6142.2119a.5174.5174,0,0,0,.6211-.7392l-.3135-.5694a6.6548,6.6548,0,0,0,.4649-.7959l.6421-.0117a.5168.5168,0,0,0,.5088-.5264.5166.5166,0,0,0-.1768-.38l-.4849-.4238a6.6694,6.6694,0,0,0,.16-.9111l.6006-.2315a.5177.5177,0,0,0,.2969-.6689ZM6.4941,13.9043,4.7666,16.8926a5.4449,5.4449,0,0,1,.0044-8.792L6.5,11.0986A2.0525,2.0525,0,0,0,6.4941,13.9043Zm2.1646-1.7822a.7608.7608,0,1,1-.4609-.3555A.7543.7543,0,0,1,8.6587,12.1221ZM7.54,10.499,5.8154,7.5068A5.4579,5.4579,0,0,1,7.9907,7.041h.0239a5.4693,5.4693,0,0,1,5.4068,4.8633l-3.457-.0029a2.0363,2.0363,0,0,0-.18-.43A2.0586,2.0586,0,0,0,7.54,10.499Zm-.0058,4.0049a2.0556,2.0556,0,0,0,2.435-1.4023l3.4512.0029a5.4455,5.4455,0,0,1-7.6147,4.3877Z" fill="6E6E73"></path>
                                    </g>
                                </svg>
                                <span>Account</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 25">
                                    <g>
                                        <rect fill="none"></rect>
                                        <path d="M15.09,12.5a7.1,7.1,0,1,1-7.1-7.1A7.1077,7.1077,0,0,1,15.09,12.5ZM7.99,6.6a5.89,5.89,0,0,0-4.4609,9.7471c.6069-.9658,2.48-1.6787,4.4609-1.6787s3.8545.7129,4.4615,1.6787A5.89,5.89,0,0,0,7.99,6.6ZM7.99,8.4A2.5425,2.5425,0,0,0,5.5151,11,2.5425,2.5425,0,0,0,7.99,13.6,2.5424,2.5424,0,0,0,10.4653,11,2.5424,2.5424,0,0,0,7.99,8.4Z" fill="6E6E73"></path>
                                    </g>
                                </svg>
                                <span>Sign in</span>
                            </a>
                        </li>`
                            navItemCollector.style.display = 'none';
                            document.querySelector('.row.one').style.visibility = 'hidden';
                            document.querySelector('.row.two').style.display = 'block';
                            document.querySelector('.row.two').style.visibility = 'visible';
                            document.querySelector('.row.two .for-top .form-section').style.display = 'none';
                            document.querySelector('.row.two .for-top .form-section').style.visibility = 'hidden';
                            document.querySelector('.row.two .for-top .bag-section').style.display = 'block';
                            document.querySelector('.row.two .for-top .bag-section').style.visibility = 'visible';
                        }
                        navContainer.classList.add('visible');
                        navContainer.classList.remove('hide');
                        Scrim.style.display = "block";
                        Scrim.style.visibility = "visible";
                        headermiddle.style.filter = "blur(10px)";
                        headerbottom.style.filter = "blur(10px)";
                    });
                });
            };

            if (window.innerWidth < 876) {
                navItems.forEach((item, index) => {
                    item.addEventListener('click', () => {
                        clearTimeout(hideTimeout);
                        if (index === 0 || index === 3) {
                            return;
                        } else if (index === 1) {
                            hamburgerContainer.classList.toggle('active');
                            html.classList.add('overflow-hidden');
                            forbottomh2.innerHTML = `Quick Links`;
                            quickLinksList.classList.add('quickLinksList_Search');
                            quickLinksList.classList.remove('quickLinksList_Bag');
                            quickLinksList.innerHTML =
                                `<li>
                            <a href="">
                                <i></i>
                                <span>The Apple Store Shopping Event</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>
                                <span>Find a Store</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>
                                <span>Apple Gift Card</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>
                                <span>Apple Vision Pro</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>
                                <span>Apple Trade In</span>
                            </a>
                        </li>`
                            navItemCollector.style.display = 'none';
                            itemCollector.style.display = 'none';
                            document.querySelector('.row.one').style.visibility = 'hidden';
                            document.querySelector('.row.two').style.display = 'block';
                            document.querySelector('.row.two').style.visibility = 'visible';
                            document.querySelector('.row.two .for-top .form-section').style.display = 'block';
                            document.querySelector('.row.two .for-top .form-section').style.visibility = 'visible';
                            document.querySelector('.row.two .for-top .bag-section').style.display = 'none';
                            document.querySelector('.row.two .for-top .bag-section').style.visibility = 'hidden';
                        } else if (index === 2) {
                            hamburgerContainer.classList.toggle('active');
                            html.classList.add('overflow-hidden');
                            forbottomh2.innerHTML = `My Profile`;
                            quickLinksList.classList.remove('quickLinksList_Search');
                            quickLinksList.classList.add('quickLinksList_Bag');
                            quickLinksList.innerHTML =
                                `<li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 25">
                                    <g>
                                        <rect fill="none"></rect>
                                        <path d="M14.5146,9.5234a2.56,2.56,0,0,0-1.11-1.4228l-4.25-2.3975a2.3909,2.3909,0,0,0-2.31,0l-4.25,2.3975a2.2971,2.2971,0,0,0-.6025.5107A2.2684,2.2684,0,0,0,1.4,10.1475v4.705a2.3546,2.3546,0,0,0,1.1953,2.0469l4.25,2.3975a2.3541,2.3541,0,0,0,2.31,0l4.25-2.3975A2.3546,2.3546,0,0,0,14.6,14.8525v-4.705A2.3322,2.3322,0,0,0,14.5146,9.5234ZM7.4,12.9453v5.2871L3.1851,15.8545a1.153,1.153,0,0,1-.585-1.002L2.603,10.24Zm.6-1.04L3.147,9.17a.4347.4347,0,0,1,.0385-.0244l1.7623-.9941,4.895,2.7158Zm5.4-1.666v4.6132a1.153,1.153,0,0,1-.585,1.002L8.6,18.2324V12.9453ZM8.5649,6.748l4.25,2.3975a.4347.4347,0,0,1,.0385.0244l-1.7842,1.0059L6.1733,7.46l1.2618-.712A1.1731,1.1731,0,0,1,8.5649,6.748Z" fill="6E6E73"></path>
                                    </g>
                                </svg>
                                <span>Orders</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 25">
                                    <g>
                                        <rect id="box_" fill="none"></rect>
                                        <path d="M10.3,5.15H5.7a2.3022,2.3022,0,0,0-2.3,2.3V19.0381a.8642.8642,0,0,0,.19.5869.67.67,0,0,0,.5313.2246.7441.7441,0,0,0,.438-.1465,4.8685,4.8685,0,0,0,.5366-.4765l2.8931-2.8858,2.9165,2.8867a6.4062,6.4062,0,0,0,.5307.4717.7286.7286,0,0,0,.4429.15.6684.6684,0,0,0,.5308-.2246.8619.8619,0,0,0,.19-.5869V7.45A2.3022,2.3022,0,0,0,10.3,5.15ZM4.6,7.45A1.102,1.102,0,0,1,5.7,6.35h4.6A1.102,1.102,0,0,1,11.4,7.45l-.0005,10.5781L8.832,15.4863a1.186,1.186,0,0,0-1.665.001L4.6,18.0293Z" fill="6E6E73"></path>
                                    </g>
                                </svg>                                               
                                <span>Your Saves</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 25">
                                    <g>
                                        <rect fill="none"></rect>
                                        <path d="M15.6094,12.3252a.5142.5142,0,0,0-.2959-.2959l-.5972-.2324a6.6665,6.6665,0,0,0-.16-.917l.4809-.42a.5172.5172,0,0,0-.3291-.9073l-.6372-.0136c-.0654-.1377-.1343-.2784-.2139-.4151s-.1635-.2636-.2519-.3935l.3076-.5576a.517.517,0,0,0-.62-.7393l-.6035.2051a6.68,6.68,0,0,0-.7134-.5977l.0986-.6328a.5172.5172,0,0,0-.43-.5918.54.54,0,0,0-.4052.1084l-.5015.4033A6.911,6.911,0,0,0,9.87,6.01l-.124-.6328a.5178.5178,0,0,0-.9512-.167l-.333.5507a7.2576,7.2576,0,0,0-.92.0039L7.2056,5.207a.518.518,0,0,0-.9512.167l-.125.6377a6.6192,6.6192,0,0,0-.8652.31l-.501-.4063a.5176.5176,0,0,0-.8364.4834l.0991.6358a6.6073,6.6073,0,0,0-.7017.5947L2.71,7.417a.5173.5173,0,0,0-.6211.7392l.3134.5694a6.7192,6.7192,0,0,0-.4653.7959l-.6421.0117a.516.516,0,0,0-.5083.5264.52.52,0,0,0,.1763.38l.4849.4238a6.8261,6.8261,0,0,0-.16.9111l-.6006.23a.5176.5176,0,0,0-.001.9658l.5972.2324a6.6665,6.6665,0,0,0,.16.917l-.4809.419a.5184.5184,0,0,0-.05.7314.52.52,0,0,0,.3789.1758l.6367.0137c.063.1318.1333.2754.2144.416.0673.1172.143.2246.2163.3281l.04.0566-.312.5664a.5176.5176,0,0,0,.2036.7032.52.52,0,0,0,.416.0361l.5967-.2031a6.82,6.82,0,0,0,.7207.5937l-.0991.6348a.5153.5153,0,0,0,.0933.3857.5187.5187,0,0,0,.7421.0977l.5064-.4082a6.6137,6.6137,0,0,0,.8628.3193l.1245.6358a.5139.5139,0,0,0,.22.33.53.53,0,0,0,.3877.0782.5193.5193,0,0,0,.3433-.24l.3388-.56.0577.0049a4.8076,4.8076,0,0,0,.7871.0019l.0669-.0058.3383.5625a.518.518,0,0,0,.9512-.167l.1245-.6348a6.6152,6.6152,0,0,0,.8589-.3193l.5088.4131a.5176.5176,0,0,0,.8364-.4834l-.0991-.6358a6.6173,6.6173,0,0,0,.7017-.5947l.6142.2119a.5174.5174,0,0,0,.6211-.7392l-.3135-.5694a6.6548,6.6548,0,0,0,.4649-.7959l.6421-.0117a.5168.5168,0,0,0,.5088-.5264.5166.5166,0,0,0-.1768-.38l-.4849-.4238a6.6694,6.6694,0,0,0,.16-.9111l.6006-.2315a.5177.5177,0,0,0,.2969-.6689ZM6.4941,13.9043,4.7666,16.8926a5.4449,5.4449,0,0,1,.0044-8.792L6.5,11.0986A2.0525,2.0525,0,0,0,6.4941,13.9043Zm2.1646-1.7822a.7608.7608,0,1,1-.4609-.3555A.7543.7543,0,0,1,8.6587,12.1221ZM7.54,10.499,5.8154,7.5068A5.4579,5.4579,0,0,1,7.9907,7.041h.0239a5.4693,5.4693,0,0,1,5.4068,4.8633l-3.457-.0029a2.0363,2.0363,0,0,0-.18-.43A2.0586,2.0586,0,0,0,7.54,10.499Zm-.0058,4.0049a2.0556,2.0556,0,0,0,2.435-1.4023l3.4512.0029a5.4455,5.4455,0,0,1-7.6147,4.3877Z" fill="6E6E73"></path>
                                    </g>
                                </svg>
                                <span>Account</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 25">
                                    <g>
                                        <rect fill="none"></rect>
                                        <path d="M15.09,12.5a7.1,7.1,0,1,1-7.1-7.1A7.1077,7.1077,0,0,1,15.09,12.5ZM7.99,6.6a5.89,5.89,0,0,0-4.4609,9.7471c.6069-.9658,2.48-1.6787,4.4609-1.6787s3.8545.7129,4.4615,1.6787A5.89,5.89,0,0,0,7.99,6.6ZM7.99,8.4A2.5425,2.5425,0,0,0,5.5151,11,2.5425,2.5425,0,0,0,7.99,13.6,2.5424,2.5424,0,0,0,10.4653,11,2.5424,2.5424,0,0,0,7.99,8.4Z" fill="6E6E73"></path>
                                    </g>
                                </svg>
                                <span>Sign in</span>
                            </a>
                        </li>`
                            navItemCollector.style.display = 'none';
                            itemCollector.style.display = 'none';
                            document.querySelector('.row.one').style.visibility = 'hidden';
                            document.querySelector('.row.two').style.display = 'block';
                            document.querySelector('.row.two').style.visibility = 'visible';
                            document.querySelector('.row.two .for-top .form-section').style.display = 'none';
                            document.querySelector('.row.two .for-top .form-section').style.visibility = 'hidden';
                            document.querySelector('.row.two .for-top .bag-section').style.display = 'block';
                            document.querySelector('.row.two .for-top .bag-section').style.visibility = 'visible';
                        }
                        navContainer.classList.add('visible');
                        navContainer.classList.remove('hide');
                        Scrim.style.display = "block";
                        Scrim.style.visibility = "visible";
                        headermiddle.style.filter = "blur(10px)";
                        headerbottom.style.filter = "blur(10px)";
                    });
                });
            };

            if (window.innerWidth < 876) {
                itemCollectorUL.forEach((item, index) => {
                    item.addEventListener('click', () => {
                        if (index === 5) {
                            return;
                        }
                        handleNavItemClick(index);

                        itemCollector.classList.remove('animate-fade-in-left-reverse');
                        navItemCollector.classList.remove('animate-fade-out-left-reverse');
                        itemCollector.classList.add('animate-fade-out-left');
                        setTimeout(() => {
                            itemCollector.style.display = 'none';
                            itemCollector.style.visibility = 'hidden';
                            navItemCollector.style.display = 'flex';
                            navItemCollector.style.visibility = 'visible';
                            backButton.style.display = 'block';
                            backButton.style.visibility = 'visible';
                            itemCollector.classList.remove('animate-fade-out-left');
                            navItemCollector.classList.add('animate-fade-in-left');
                        }, 200);
                    });
                });
            };

            if (window.innerWidth < 876) {
                backButton.addEventListener('click', () => {
                    navItemCollector.classList.remove('animate-fade-in-left');
                    itemCollector.classList.add('animate-fade-in-left-reverse');
                    navItemCollector.classList.add('animate-fade-out-left-reverse');
                    setTimeout(() => {
                        handleBackButtonClick();
                    }, 200);
                });
            }
            //for hamblur button logic
            if (window.innerWidth < 876) {
                var hamburgerContainer = document.querySelector('.hambler-container');
                const navContainer = document.querySelector('.nav-items');
                const SBitemcollector = document.getElementById('S_B-item-collector');
                var html = document.documentElement;
                hamburgerContainer.addEventListener('click', () => {
                    hamburgerContainer.classList.toggle('active');
                    if (!navContainer.classList.contains('visible')) {
                        navContainer.classList.remove('hide');
                        navContainer.classList.add('visible');
                        html.classList.add('overflow-hidden');
                    } else {
                        navContainer.classList.add('hide');
                        Scrim.style.display = "none";
                        Scrim.style.visibility = "hidden";
                        headermiddle.style.filter = "blur(0)";
                        headerbottom.style.filter = "blur(0)";
                        setTimeout(() => {
                            navContainer.classList.remove('visible');
                            navContainer.classList.remove('hide');
                            SBitemcollector.style.display = "none";
                            SBitemcollector.style.visibility = "hidden";
                            html.classList.remove('overflow-hidden');
                            handleBackButtonClick();
                            handleSearchButtonClick();
                        }, 200);
                    }
                });
            };

            function populateMenu(menuData, container, uniqueId) {
                const titleElement = container.querySelector('h2');
                const ulElement = container.querySelector('ul');
                const titleId = uniqueId + '_title';
                const ulId = uniqueId + '_ul';

                titleElement.textContent = menuData.title || "";
                titleElement.id = titleId;

                ulElement.innerHTML = "";
                ulElement.id = ulId;

                menuData.items.forEach((item, index) => {
                    const liElement = document.createElement('li');
                    const aElement = document.createElement('a');
                    const liId = uniqueId + '_li_' + index;
                    const aId = uniqueId + '_a_' + index;

                    aElement.href = item.link || "#";
                    aElement.textContent = item.text;

                    liElement.id = liId;
                    aElement.id = aId;

                    liElement.appendChild(aElement);
                    ulElement.appendChild(liElement);
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));
};
fetchDataAndPopulate();

//for move nav-menus in mobile screen
let originalOrder;
function moveItems() {
    const screenWidth = window.innerWidth;
    const sourceUl = document.getElementById('dynamic_nav-items');
    const destinationUl = document.querySelector('.item-collector ul');

    if (!originalOrder) {
        originalOrder = Array.from(sourceUl.children);
    }

    if (screenWidth < 876) {
        const itemsToMove = originalOrder.slice(1, -3);
        itemsToMove.forEach(item => {
            destinationUl.appendChild(item);
        });

    }
    else {
        originalOrder.forEach(item => {
            sourceUl.appendChild(item);
        });
    }
};
document.addEventListener('DOMContentLoaded', moveItems);
window.addEventListener('resize', moveItems);
