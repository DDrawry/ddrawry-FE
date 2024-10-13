import React from "react";
import { IconPropsType } from "src/types/IconPropsType";

const WindyIcon: React.FC<IconPropsType> = ({ isClick }) => {
  return (
    <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.8143 20.9835C22.6325 20.983 23.4352 21.1979 24.1352 21.605C24.8353 22.0122 25.4059 22.596 25.7849 23.293C26.164 23.99 26.3369 24.7735 26.2851 25.5583C26.2332 26.3432 25.9585 27.0993 25.4907 27.7446C25.023 28.3899 24.3801 28.8997 23.632 29.2185C22.8839 29.5372 22.0592 29.6528 21.2475 29.5527C20.4358 29.4526 19.6682 29.1406 19.0282 28.6506C18.3881 28.1606 17.9 27.5113 17.617 26.7734C17.4033 26.2161 17.7001 25.5977 18.2801 25.3923C18.86 25.1869 19.5035 25.4722 19.7172 26.0295C19.8587 26.3985 20.1028 26.7231 20.4228 26.9681C20.7428 27.2131 21.1266 27.3691 21.5325 27.4192C21.9383 27.4692 22.3507 27.4114 22.7247 27.252C23.0988 27.0927 23.4202 26.8378 23.6541 26.5151C23.8879 26.1925 24.0253 25.8144 24.0513 25.422C24.0772 25.0295 23.9907 24.6378 23.8012 24.2893C23.6117 23.9408 23.3264 23.6489 22.9763 23.4453C22.6263 23.2417 22.2248 23.1343 21.8157 23.1346L6.1465 23.1346C5.52841 23.1346 5.02734 22.653 5.02734 22.059C5.02734 21.4651 5.52841 20.9835 6.1465 20.9835H21.8143Z"
        fill={isClick ? "#E7C7E7" : "#000000"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2481 8.26196C17.8741 8.10257 17.4617 8.04477 17.0559 8.09483C16.65 8.14489 16.2662 8.30089 15.9462 8.5459C15.6262 8.7909 15.3821 9.11552 15.2406 9.48447C15.0269 10.0418 14.3834 10.3271 13.8035 10.1217C13.2235 9.91625 12.9267 9.29791 13.1404 8.74056C13.4234 8.00266 13.9115 7.35342 14.5516 6.86342C15.1916 6.37341 15.9592 6.0614 16.7709 5.96128C17.5826 5.86116 18.4073 5.97677 19.1554 6.29554C19.9035 6.61431 20.5464 7.12405 21.0141 7.76936C21.4819 8.41466 21.7566 9.17083 21.8085 9.95568C21.8603 10.7405 21.6874 11.524 21.3083 12.221C20.9293 12.918 20.3587 13.5018 19.6586 13.909C18.9587 14.316 18.1562 14.5309 17.3382 14.5305H3.90822C3.29013 14.5305 2.78906 14.0489 2.78906 13.455C2.78906 12.861 3.29013 12.3794 3.90822 12.3794H17.3382C17.7473 12.3797 18.1496 12.2723 18.4997 12.0687C18.8498 11.8651 19.1351 11.5732 19.3246 11.2247C19.5141 10.8762 19.6006 10.4845 19.5746 10.092C19.5487 9.6996 19.4113 9.32152 19.1775 8.99887C18.9436 8.67622 18.6222 8.42135 18.2481 8.26196Z"
        fill={isClick ? "#E7C7E7" : "#000000"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.5589 12.564C30.1848 12.4046 29.7725 12.3468 29.3666 12.3968C28.9608 12.4469 28.577 12.6029 28.2569 12.8479C27.9369 13.0929 27.6929 13.4175 27.5514 13.7865C27.3376 14.3438 26.6942 14.6291 26.1142 14.4237C25.5343 14.2183 25.2374 13.5999 25.4512 13.0426C25.7342 12.3047 26.2222 11.6554 26.8623 11.1654C27.5024 10.6754 28.27 10.3634 29.0817 10.2633C29.8933 10.1632 30.7181 10.2788 31.4661 10.5975C32.2142 10.9163 32.8571 11.4261 33.3249 12.0714C33.7926 12.7167 34.0673 13.4728 34.1192 14.2577C34.1711 15.0425 33.9981 15.826 33.6191 16.523C33.24 17.22 32.6694 17.8038 31.9693 18.211C31.2694 18.618 30.4668 18.833 29.6488 18.8325C29.6485 18.8325 29.649 18.8325 29.6488 18.8325H5.02736C4.40927 18.8325 3.9082 18.3509 3.9082 17.757C3.9082 17.163 4.40927 16.6814 5.02736 16.6814H29.6489C30.0581 16.6817 30.4604 16.5743 30.8105 16.3707C31.1605 16.1671 31.4458 15.8752 31.6353 15.5267C31.8248 15.1782 31.9113 14.7865 31.8854 14.394C31.8595 14.0016 31.7221 13.6235 31.4882 13.3009C31.2543 12.9782 30.9329 12.7233 30.5589 12.564Z"
        fill={isClick ? "#E7C7E7" : "#000000"}
      />
    </svg>
  );
};

export default WindyIcon;
