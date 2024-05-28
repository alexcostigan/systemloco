import React from "react";

const Header: React.FC = () => {
  return (
    <header className=" text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <svg
          width="180"
          height="41"
          viewBox="0 0 180 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2013_178)">
            <path
              d="M0 20.1117C0 9.00444 8.89855 0 19.8752 0C30.8519 0 39.7504 9.00444 39.7504 20.1117C39.7504 31.219 30.8519 40.2235 19.8752 40.2235C8.89855 40.2235 0 31.219 0 20.1117Z"
              fill="#FFE312"
            />
            <path
              d="M29.7124 22.732C28.6103 22.732 27.6669 23.4219 27.2793 24.3977H22.3082C22.1915 24.1024 22.021 23.8354 21.8132 23.6038L24.7412 17.4607C24.865 17.4796 24.9934 17.4914 25.1218 17.4914C26.5718 17.4914 27.7463 16.3029 27.7463 14.8357C27.7463 13.3684 26.5718 12.1799 25.1218 12.1799C24.0197 12.1799 23.0764 12.8699 22.6888 13.8433H17.0429C16.6553 12.8675 15.7119 12.1799 14.6098 12.1799C13.1598 12.1799 11.9853 13.3684 11.9853 14.8357C11.9853 16.3029 13.1598 17.4914 14.6098 17.4914C14.6845 17.4914 14.7569 17.4867 14.8316 17.4796L17.9021 23.6393C17.7083 23.8637 17.5495 24.1189 17.4398 24.3977H12.4687C12.0811 23.4219 11.1377 22.732 10.0356 22.732C8.58562 22.732 7.41113 23.9204 7.41113 25.3877C7.41113 26.855 8.58562 28.0434 10.0356 28.0434C11.1377 28.0434 12.0811 27.3535 12.4687 26.3801H17.4398C17.8274 27.3559 18.7707 28.0434 19.8728 28.0434C20.9749 28.0434 21.9183 27.3535 22.3059 26.3801H27.277C27.6646 27.3559 28.6079 28.0434 29.71 28.0434C31.16 28.0434 32.3345 26.855 32.3345 25.3877C32.3345 23.9204 31.16 22.732 29.71 22.732H29.7124ZM19.8728 22.732C19.7981 22.732 19.7257 22.7367 19.651 22.7438L16.5805 16.5841C16.7743 16.3596 16.9331 16.1045 17.0429 15.8257H22.6888C22.7799 16.0525 22.8989 16.2628 23.046 16.4541L20.048 22.7414C19.9896 22.7367 19.9335 22.732 19.8728 22.732Z"
              fill="#030304"
            />
            <path
              d="M53.2418 25.7894C54.2435 25.7894 54.972 25.6193 55.4296 25.2743C55.885 24.9317 56.1138 24.4474 56.1138 23.8212C56.1138 23.4479 56.0367 23.129 55.8826 22.8596C55.7285 22.5903 55.5067 22.3493 55.2195 22.1319C54.9323 21.9169 54.5821 21.7137 54.1711 21.5294C53.7578 21.3427 53.2861 21.1608 52.7561 20.9812C52.2261 20.7875 51.7147 20.5748 51.2197 20.3433C50.727 20.1117 50.2927 19.8258 49.9168 19.4832C49.5409 19.1406 49.2397 18.7319 49.0108 18.2546C48.782 17.7773 48.6676 17.2032 48.6676 16.5322C48.6676 15.131 49.1463 14.0324 50.1036 13.2338C51.0609 12.4375 52.3638 12.0382 54.0147 12.0382C54.972 12.0382 55.8219 12.1469 56.5668 12.3619C57.3093 12.5793 57.8954 12.8132 58.3227 13.066L57.4611 15.3461C56.959 15.0625 56.4103 14.8475 55.8149 14.6987C55.2172 14.5498 54.6031 14.4742 53.9703 14.4742C53.2184 14.4742 52.6347 14.6301 52.2144 14.9444C51.7941 15.2563 51.584 15.6981 51.584 16.2628C51.584 16.6054 51.654 16.9007 51.7941 17.1465C51.9342 17.3922 52.1327 17.6119 52.3919 17.8057C52.6487 17.9994 52.9522 18.179 53.2978 18.342C53.6434 18.5074 54.024 18.6634 54.435 18.8122C55.1565 19.0816 55.8009 19.3533 56.3683 19.6274C56.9357 19.9038 57.4144 20.2322 57.8043 20.6103C58.1942 20.9907 58.4931 21.4372 58.6986 21.9523C58.9041 22.4674 59.0068 23.0888 59.0068 23.8189C59.0068 25.22 58.5165 26.3045 57.5381 27.0724C56.5574 27.8403 55.1261 28.223 53.2418 28.223C52.609 28.223 52.0299 28.1829 51.5069 28.1002C50.9839 28.0175 50.5192 27.9183 50.1153 27.7978C49.7113 27.6796 49.3611 27.5544 49.0669 27.4292C48.7727 27.3039 48.5368 27.1882 48.3594 27.0818L49.1766 24.7782C49.5736 25.0026 50.1106 25.2247 50.7901 25.4492C51.4672 25.6736 52.2844 25.7847 53.2418 25.7847V25.7894Z"
              fill="#010101"
            />
            <path
              d="M70.7634 16.199C69.5726 20.6409 68.1903 24.6647 66.6165 28.2726C66.3223 28.9437 66.0187 29.5178 65.7105 29.9951C65.4 30.4724 65.0544 30.8669 64.6715 31.1812C64.2885 31.4931 63.8612 31.7222 63.3896 31.864C62.9179 32.0058 62.3715 32.0767 61.7528 32.0767C61.3395 32.0767 60.9309 32.0318 60.5246 31.942C60.1183 31.8522 59.8124 31.7553 59.6069 31.6514L60.0926 29.4824C60.625 29.6903 61.1503 29.7942 61.6687 29.7942C62.3645 29.7942 62.9086 29.6265 63.3008 29.291C63.6931 28.9555 64.0364 28.438 64.3329 27.7363C63.49 26.0965 62.6797 24.3079 61.9022 22.3705C61.1247 20.433 60.4335 18.3751 59.8264 16.199H62.6774C62.8245 16.8251 63.0066 17.5032 63.2215 18.2333C63.4363 18.9634 63.6698 19.7053 63.9196 20.459C64.1718 21.2127 64.438 21.9617 64.7182 22.706C64.9984 23.4526 65.2809 24.1449 65.5611 24.7852C66.0304 23.4597 66.4694 22.0468 66.8803 20.5488C67.2913 19.0508 67.6649 17.6024 68.0011 16.2013H70.7634V16.199Z"
              fill="#010101"
            />
            <path
              d="M75.69 25.9478C76.3975 25.9478 76.9136 25.8627 77.2358 25.6902C77.5604 25.5178 77.7215 25.2248 77.7215 24.8066C77.7215 24.4191 77.5487 24.0977 77.2031 23.8449C76.8575 23.5921 76.2855 23.3157 75.4916 23.018C75.0059 22.8384 74.5599 22.6494 74.156 22.4485C73.7497 22.2477 73.4018 22.0138 73.1076 21.7444C72.8134 21.4751 72.5799 21.1514 72.4118 20.771C72.2413 20.3906 72.1572 19.9251 72.1572 19.3746C72.1572 18.3019 72.5472 17.456 73.3294 16.837C74.1093 16.218 75.1694 15.9084 76.512 15.9084C77.1891 15.9084 77.8382 15.9722 78.457 16.0975C79.0757 16.2251 79.5404 16.3479 79.8486 16.4661L79.3629 18.6563C79.0687 18.5216 78.6928 18.3988 78.2352 18.2877C77.7775 18.1767 77.2475 18.12 76.645 18.12C76.101 18.12 75.6574 18.2121 75.3188 18.3988C74.9802 18.5854 74.8098 18.8713 74.8098 19.2588C74.8098 19.4526 74.8425 19.6251 74.9102 19.7739C74.9756 19.9228 75.09 20.0622 75.2534 20.1874C75.4145 20.315 75.6293 20.4402 75.8932 20.5678C76.1594 20.6954 76.4816 20.8253 76.8645 20.96C77.4973 21.1986 78.0367 21.4326 78.478 21.6641C78.9193 21.8957 79.2836 22.1556 79.5708 22.4462C79.858 22.7368 80.0681 23.0676 80.2012 23.4409C80.3343 23.8142 80.3997 24.2608 80.3997 24.7829C80.3997 25.9005 79.991 26.7464 79.1738 27.3205C78.3566 27.8947 77.1891 28.1806 75.6714 28.1806C74.6557 28.1806 73.8384 28.0955 73.2197 27.923C72.6009 27.7506 72.1666 27.6135 71.9167 27.5096L72.3814 25.2508C72.7783 25.4162 73.2547 25.5721 73.8057 25.721C74.3568 25.8698 74.9872 25.9454 75.6947 25.9454L75.69 25.9478Z"
              fill="#010101"
            />
            <path
              d="M82.7605 13.1133L85.434 12.6667V16.1991H89.5436V18.4578H85.434V23.2188C85.434 24.1568 85.5811 24.8278 85.8753 25.2319C86.1695 25.6335 86.6716 25.8367 87.3791 25.8367C87.8647 25.8367 88.2967 25.7847 88.6726 25.6808C89.0486 25.5768 89.3474 25.4799 89.5669 25.3902L90.0082 27.5355C89.7 27.6702 89.2937 27.8073 88.794 27.949C88.292 28.0908 87.7036 28.1617 87.0265 28.1617C86.2022 28.1617 85.5134 28.0506 84.96 27.8262C84.4066 27.6017 83.97 27.278 83.6455 26.8527C83.3209 26.4274 83.0921 25.9147 82.9613 25.3098C82.8282 24.705 82.7628 24.0174 82.7628 23.2424V13.1133H82.7605Z"
              fill="#010101"
            />
            <path
              d="M91.2899 22.1011C91.2899 21.0733 91.4417 20.1708 91.7429 19.3958C92.0441 18.6208 92.4457 17.9758 92.9478 17.4607C93.4474 16.9456 94.0218 16.5581 94.671 16.2982C95.3177 16.0383 95.9809 15.906 96.6604 15.906C98.2505 15.906 99.4927 16.4045 100.382 17.404C101.274 18.4034 101.718 19.8943 101.718 21.8767C101.718 22.0255 101.713 22.1933 101.706 22.3799C101.699 22.5666 101.688 22.7344 101.674 22.8832H94.0499C94.1246 23.8212 94.4515 24.5489 95.0329 25.064C95.6143 25.5791 96.4572 25.8343 97.5616 25.8343C98.2108 25.8343 98.8015 25.7752 99.3409 25.6547C99.8779 25.5366 100.303 25.409 100.611 25.2743L100.964 27.4882C100.817 27.5638 100.613 27.6418 100.357 27.7221C100.1 27.8048 99.8032 27.8781 99.474 27.9466C99.1424 28.0127 98.7852 28.0694 98.4022 28.1143C98.0193 28.1592 97.6294 28.1805 97.2324 28.1805C96.2167 28.1805 95.3318 28.0269 94.5799 27.7221C93.828 27.4173 93.2093 26.992 92.7236 26.4486C92.2379 25.9052 91.876 25.2625 91.6402 24.5253C91.4043 23.7881 91.2876 22.9801 91.2876 22.0988L91.2899 22.1011ZM99.0443 20.8938C99.0443 20.5205 98.993 20.166 98.8902 19.8329C98.7875 19.4974 98.6357 19.2068 98.4373 18.961C98.2388 18.7153 97.9959 18.5216 97.7087 18.3798C97.4215 18.238 97.0783 18.1672 96.6814 18.1672C96.2844 18.1672 95.9085 18.2451 95.5979 18.4011C95.2897 18.557 95.0259 18.7626 94.8134 19.0154C94.6009 19.2682 94.4351 19.5588 94.316 19.8872C94.197 20.2157 94.1176 20.5512 94.0732 20.8938H99.0443Z"
              fill="#010101"
            />
            <path
              d="M111.13 21.7443C111.13 20.5228 110.978 19.6391 110.677 19.0957C110.376 18.5523 109.811 18.2806 108.987 18.2806C108.693 18.2806 108.368 18.3018 108.015 18.3467C107.663 18.3916 107.397 18.4294 107.219 18.4578V27.8922H104.546V16.5794C105.062 16.4305 105.734 16.2888 106.568 16.1541C107.399 16.0194 108.279 15.9532 109.209 15.9532C110.005 15.9532 110.656 16.0572 111.163 16.2651C111.672 16.4731 112.095 16.7495 112.433 17.0921C112.594 16.974 112.802 16.8464 113.052 16.7117C113.302 16.577 113.582 16.4542 113.893 16.3431C114.201 16.2321 114.53 16.1375 114.876 16.0643C115.221 15.9887 115.571 15.9532 115.926 15.9532C116.825 15.9532 117.565 16.0832 118.147 16.3455C118.728 16.6054 119.186 16.9716 119.517 17.4418C119.849 17.912 120.078 18.479 120.202 19.1406C120.328 19.8045 120.388 20.5299 120.388 21.3214V27.8946H117.715V21.7467C117.715 20.5252 117.568 19.6415 117.274 19.0981C116.979 18.5546 116.412 18.2829 115.571 18.2829C115.144 18.2829 114.74 18.3538 114.357 18.4956C113.974 18.6373 113.687 18.7744 113.496 18.909C113.612 19.2824 113.694 19.6769 113.738 20.0951C113.783 20.5134 113.804 20.9599 113.804 21.4372V27.8993H111.13V21.7514V21.7443Z"
              fill="#010101"
            />
            <path
              d="M138.617 25.4563V27.8946H128.939V12.3973H131.722V25.4539H138.615L138.617 25.4563Z"
              fill="#010101"
            />
            <path
              d="M150.836 22.0351C150.836 22.9589 150.703 23.8 150.439 24.5608C150.173 25.3216 149.8 25.969 149.314 26.5054C148.828 27.0417 148.242 27.4599 147.558 27.7576C146.874 28.0553 146.117 28.2042 145.293 28.2042C144.469 28.2042 143.717 28.0553 143.04 27.7576C142.363 27.4599 141.781 27.0417 141.296 26.5054C140.81 25.969 140.429 25.3193 140.158 24.5608C139.885 23.8 139.75 22.9589 139.75 22.0351C139.75 21.1112 139.885 20.2724 140.158 19.5187C140.432 18.7674 140.815 18.1223 141.307 17.5836C141.8 17.0473 142.386 16.6338 143.063 16.3432C143.74 16.0526 144.485 15.9084 145.295 15.9084C146.106 15.9084 146.853 16.0526 147.537 16.3432C148.221 16.6338 148.807 17.0473 149.293 17.5836C149.779 18.12 150.157 18.765 150.43 19.5187C150.703 20.2724 150.839 21.1089 150.839 22.0351H150.836ZM148.097 22.0351C148.097 20.8726 147.85 19.9511 147.357 19.273C146.862 18.5949 146.176 18.2547 145.291 18.2547C144.406 18.2547 143.719 18.5949 143.224 19.273C142.729 19.9511 142.484 20.8726 142.484 22.0351C142.484 23.1975 142.732 24.145 143.224 24.8302C143.717 25.5154 144.406 25.858 145.291 25.858C146.176 25.858 146.862 25.5154 147.357 24.8302C147.85 24.145 148.097 23.2141 148.097 22.0351Z"
              fill="#010101"
            />
            <path
              d="M152.956 22.0562C152.956 21.1915 153.09 20.3834 153.353 19.6297C153.62 18.8783 153.998 18.2239 154.49 17.6733C154.983 17.1228 155.583 16.6904 156.291 16.3762C156.998 16.0643 157.794 15.906 158.677 15.906C159.768 15.906 160.797 16.1068 161.771 16.5085L161.197 18.7224C160.888 18.5877 160.538 18.4767 160.148 18.3869C159.758 18.2971 159.343 18.2522 158.899 18.2522C157.853 18.2522 157.057 18.583 156.513 19.2469C155.969 19.9109 155.695 20.8465 155.695 22.0539C155.695 23.2612 155.952 24.1378 156.468 24.8159C156.984 25.494 157.853 25.8343 159.076 25.8343C159.532 25.8343 159.982 25.7894 160.424 25.6996C160.865 25.6098 161.248 25.4988 161.572 25.3641L161.948 27.5993C161.654 27.7481 161.208 27.8828 160.61 28.0009C160.015 28.1191 159.399 28.1805 158.766 28.1805C157.778 28.1805 156.921 28.0269 156.193 27.7221C155.464 27.4173 154.859 26.992 154.381 26.4486C153.902 25.9052 153.545 25.2554 153.309 24.5041C153.073 23.7527 152.956 22.9352 152.956 22.0562Z"
              fill="#010101"
            />
            <path
              d="M174.233 22.0351C174.233 22.9589 174.1 23.8 173.836 24.5608C173.57 25.3216 173.196 25.969 172.71 26.5054C172.225 27.0417 171.639 27.4599 170.954 27.7576C170.27 28.0553 169.514 28.2042 168.689 28.2042C167.865 28.2042 167.113 28.0553 166.436 27.7576C165.759 27.4599 165.178 27.0417 164.692 26.5054C164.206 25.969 163.826 25.3193 163.555 24.5608C163.282 23.8 163.146 22.9589 163.146 22.0351C163.146 21.1112 163.282 20.2724 163.555 19.5187C163.828 18.7674 164.211 18.1223 164.704 17.5836C165.196 17.0473 165.782 16.6338 166.46 16.3432C167.137 16.0526 167.882 15.9084 168.692 15.9084C169.502 15.9084 170.249 16.0526 170.933 16.3432C171.617 16.6338 172.204 17.0473 172.689 17.5836C173.175 18.12 173.553 18.765 173.826 19.5187C174.1 20.2724 174.235 21.1089 174.235 22.0351H174.233ZM171.494 22.0351C171.494 20.8726 171.246 19.9511 170.754 19.273C170.259 18.5949 169.572 18.2547 168.687 18.2547C167.802 18.2547 167.116 18.5949 166.621 19.273C166.126 19.9511 165.88 20.8726 165.88 22.0351C165.88 23.1975 166.128 24.145 166.621 24.8302C167.113 25.5154 167.802 25.858 168.687 25.858C169.572 25.858 170.259 25.5154 170.754 24.8302C171.246 24.145 171.494 23.2141 171.494 22.0351Z"
              fill="#010101"
            />
            <path
              d="M180 26.4156C180 26.9377 179.827 27.363 179.482 27.6891C179.136 28.0175 178.72 28.1805 178.232 28.1805C177.744 28.1805 177.312 28.0151 176.974 27.6891C176.635 27.3607 176.465 26.9354 176.465 26.4156C176.465 25.8958 176.633 25.4657 176.974 25.1302C177.312 24.7947 177.733 24.627 178.232 24.627C178.732 24.627 179.134 24.7947 179.482 25.1302C179.827 25.4657 180 25.8934 180 26.4156Z"
              fill="#FFE312"
            />
          </g>
          <defs>
            <clipPath id="clip0_2013_178">
              <rect width="180" height="40.2235" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </header>
  );
};

export default Header;
