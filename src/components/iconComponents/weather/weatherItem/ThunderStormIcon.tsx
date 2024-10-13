import React from "react";
import { IconPropsType } from "src/types/IconPropsType";

const ThunderStormIcon: React.FC<IconPropsType> = ({ isClick }) => {
  return (
    <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9953 21.1604C19.5117 21.4867 19.6551 22.1536 19.3156 22.6499L16.7764 26.3611H21.7379C22.1494 26.3611 22.5277 26.5781 22.723 26.9262C22.9183 27.2742 22.8991 27.6972 22.6731 28.0276L18.9938 33.4052C18.6542 33.9015 17.9603 34.0393 17.4438 33.713C16.9274 33.3866 16.784 32.7197 17.1235 32.2234L19.6627 28.5122H14.7012C14.2897 28.5122 13.9115 28.2952 13.7161 27.9472C13.5208 27.5992 13.54 27.1762 13.7661 26.8458L17.4453 21.4682C17.7849 20.9718 18.4788 20.834 18.9953 21.1604Z"
        fill={isClick ? "#E7C7E7" : "#000000"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.6135 5.00564C21.9852 4.69439 20.2975 4.85413 18.7638 5.46466C17.23 6.07519 15.9191 7.10909 14.9968 8.43561C14.0745 9.76213 13.5822 11.3217 13.5822 12.9171C13.5822 13.5111 13.0811 13.9926 12.4631 13.9926C11.845 13.9926 11.3439 13.5111 11.3439 12.9171C11.3439 12.389 11.3865 11.8641 11.4702 11.3467C11.2452 11.317 11.018 11.3027 10.7901 11.3038L10.7843 11.3038C9.44862 11.3038 8.16764 11.8137 7.22316 12.7214C6.27869 13.629 5.74809 14.86 5.74809 16.1437C5.74809 17.4273 6.27869 18.6583 7.22316 19.566C8.16764 20.4736 9.44862 20.9835 10.7843 20.9835H21.9759C23.636 20.9835 25.2589 20.5104 26.6392 19.6241C28.0196 18.7377 29.0954 17.4779 29.7307 16.004C30.366 14.53 30.5322 12.9081 30.2083 11.3434C29.8845 9.77866 29.085 8.34136 27.9112 7.21325C26.7373 6.08514 25.2417 5.31688 23.6135 5.00564ZM12.0494 9.25713C12.331 8.5518 12.6945 7.87512 13.1357 7.24055C14.304 5.56029 15.9645 4.25069 17.9072 3.47735C19.85 2.70401 21.9877 2.50167 24.0501 2.89592C26.1125 3.29016 28.007 4.26328 29.4939 5.69222C30.9808 7.12117 31.9934 8.94175 32.4037 10.9237C32.8139 12.9058 32.6033 14.9601 31.7986 16.8272C30.9939 18.6942 29.6312 20.2899 27.8828 21.4126C26.1343 22.5353 24.0787 23.1346 21.9759 23.1346H10.7843C8.85498 23.1346 7.00467 22.398 5.64043 21.087C4.27619 19.7759 3.50977 17.9978 3.50977 16.1437C3.50977 14.2896 4.27619 12.5114 5.64043 11.2003C7.004 9.88993 8.85316 9.15347 10.7815 9.15274"
        fill={isClick ? "#E7C7E7" : "#000000"}
      />
    </svg>
  );
};

export default ThunderStormIcon;
