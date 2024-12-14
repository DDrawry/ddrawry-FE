import { IconPropsType } from "src/types/IconPropsType";

const SmileIcon = ({ isClick }: IconPropsType) => {
  return (
    <svg className="icon-style" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5332 4.15244C9.32959 4.15244 4.2832 9.00207 4.2832 14.9638C4.2832 20.9255 9.32959 25.7752 15.5332 25.7752C21.7368 25.7752 26.7832 20.9255 26.7832 14.9638C26.7832 9.00207 21.7368 4.15244 15.5332 4.15244ZM15.5332 5.95433C20.7224 5.95433 24.9082 9.97692 24.9082 14.9638C24.9082 19.9507 20.7224 23.9733 15.5332 23.9733C10.344 23.9733 6.1582 19.9507 6.1582 14.9638C6.1582 9.97692 10.344 5.95433 15.5332 5.95433ZM11.3145 11.36C10.5381 11.36 9.9082 11.9653 9.9082 12.7114C9.9082 13.4575 10.5381 14.0629 11.3145 14.0629C12.0908 14.0629 12.7207 13.4575 12.7207 12.7114C12.7207 11.9653 12.0908 11.36 11.3145 11.36ZM19.752 11.36C18.9756 11.36 18.3457 11.9653 18.3457 12.7114C18.3457 13.4575 18.9756 14.0629 19.752 14.0629C20.5283 14.0629 21.1582 13.4575 21.1582 12.7114C21.1582 11.9653 20.5283 11.36 19.752 11.36ZM10.6699 17.6666L9.05859 18.5676C10.355 20.7179 12.7646 22.1714 15.5332 22.1714C18.3018 22.1714 20.7114 20.7179 22.0078 18.5676L20.3965 17.6666C19.4224 19.282 17.6206 20.3695 15.5332 20.3695C13.4458 20.3695 11.644 19.282 10.6699 17.6666Z"
        fill={isClick ? "#E7C7E7" : "#000000"}
      />
    </svg>
  );
};

export default SmileIcon;