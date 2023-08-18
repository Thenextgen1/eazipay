"use client";

import styles from "@/app/styles/SideBar.module.css";
import DOMPurify from "isomorphic-dompurify";

const sideBarLinks = [
  {
    href: "Dashboard",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"> <path d="M20.3677 7.25959C20.2906 7.4859 20.2329 7.72183 20.1317 7.92887C19.7225 8.74259 19.0532 9.20001 18.148 9.21927C16.5543 9.24816 14.9605 9.24334 13.3716 9.22408C12.1679 9.20964 11.1712 8.20813 11.1567 7.00922C11.1375 5.41548 11.1375 3.82174 11.1567 2.228C11.1712 1.02908 12.1727 0.027575 13.3716 0.0131303C14.9653 -0.00612944 16.5591 -0.00131451 18.148 0.0131303C19.1976 0.0227601 20.0836 0.783518 20.3195 1.82354C20.3292 1.87651 20.3532 1.92466 20.3725 1.97762C20.3677 3.73507 20.3677 5.49733 20.3677 7.25959Z" fill="#11453B"/><path d="M2.35512 19.9902C2.22512 19.9517 2.09993 19.918 1.96993 19.8747C1.06472 19.5809 0.400263 18.7239 0.390633 17.7657C0.376188 16.172 0.371373 14.5782 0.390633 12.9845C0.405077 11.7856 1.40658 10.7841 2.6055 10.7696C4.19924 10.7504 5.79298 10.7504 7.3819 10.7696C8.58564 10.7841 9.58233 11.7808 9.59677 12.9845C9.61603 14.5782 9.61603 16.172 9.59677 17.7657C9.58714 18.8154 8.81675 19.7158 7.78636 19.9373C7.73339 19.9469 7.68525 19.971 7.63228 19.9854C5.87483 19.9902 4.11739 19.9902 2.35512 19.9902Z" fill="#11453B"/><path d="M15.2783 19.9905C14.792 19.8461 14.2816 19.7546 13.8194 19.5523C11.9512 18.7194 10.9112 16.7501 11.2 14.6748C11.4697 12.744 13.0779 11.1262 15.0279 10.8229C17.5991 10.4232 19.9825 12.1951 20.3243 14.7663C20.3291 14.8096 20.3532 14.853 20.3677 14.9011C20.3677 15.2237 20.3677 15.5415 20.3677 15.8641C20.3532 15.9074 20.334 15.9508 20.3243 15.9989C20.0017 17.9201 18.9136 19.1864 17.0694 19.8027C16.7998 19.8942 16.5157 19.9327 16.2365 20.0001C15.9187 19.9905 15.5961 19.9905 15.2783 19.9905Z" fill="#11453B"/><path d="M9.6064 4.64039C9.6064 5.37707 9.61121 6.11375 9.6064 6.85044C9.60158 8.23714 8.61452 9.2242 7.22782 9.22901C5.74001 9.23383 4.2522 9.23383 2.75957 9.22901C1.3825 9.2242 0.390628 8.23232 0.385813 6.85044C0.380998 5.36263 0.380998 3.87 0.385813 2.38218C0.390628 0.995486 1.3825 0.0036112 2.76439 0.0036112C4.2522 -0.00120373 5.74001 -0.00120373 7.23264 0.0036112C8.61452 0.00842612 9.6064 0.995486 9.61121 2.38218C9.61121 3.13331 9.6064 3.88444 9.6064 4.64039Z" fill="#11453B"/></svg>',
  },
  {
    href: "Wallet",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none"><path d="M10.023 1C10.1521 1 10.2851 1 10.4142 1C11.0872 1.1448 11.4511 1.58703 11.6311 2.22494C11.7133 2.51846 11.8424 2.79632 11.9363 3.08984C11.9793 3.2229 12.042 3.26595 12.1867 3.26595C13.3449 3.25812 14.5031 3.26203 15.6613 3.26203C16.569 3.26203 17.1325 3.8295 17.1325 4.73744C17.1325 5.17968 17.1325 5.61799 17.1325 6.06023C17.1677 6.06805 17.1834 6.07588 17.2029 6.07979C18.4198 6.22068 19.2024 7.0934 19.2024 8.31443C19.2024 8.9993 19.2024 9.68026 19.2024 10.3651C19.2024 10.4356 19.2024 10.5021 19.2024 10.5647C19.2454 10.5804 19.261 10.5921 19.2806 10.596C19.9888 10.7839 20.3723 11.2809 20.3762 12.0127C20.3762 13.0224 20.3801 14.0282 20.3762 15.0379C20.3723 15.6993 19.9575 16.2237 19.3197 16.3881C19.2845 16.3959 19.2493 16.4116 19.218 16.4194C19.2102 16.4429 19.2063 16.4585 19.2063 16.4703C19.2063 17.2334 19.2102 17.9927 19.2024 18.7558C19.2024 18.9476 19.1867 19.1472 19.1437 19.335C18.9089 20.329 18.0637 20.9943 17.0308 20.9983C12.2024 21.0022 7.374 20.9983 2.54953 20.9983C2.51822 20.9983 2.48301 20.9983 2.45171 20.9943C1.6848 20.9435 1.07832 20.603 0.690953 19.9377C0.542267 19.6872 0.479662 19.3937 0.37793 19.1237C0.37793 15.4019 0.37793 11.6762 0.37793 7.95439C0.389668 7.91916 0.405319 7.88394 0.413145 7.84481C0.604871 6.95252 1.14092 6.38896 2.01739 6.1385C2.13477 6.10719 2.25607 6.09153 2.38519 6.06414C2.30302 5.84107 2.22868 5.63365 2.15434 5.42623C1.84523 4.57699 2.18564 3.84515 3.03471 3.53598C5.36282 2.69066 7.69484 1.84533 10.023 1ZM18.0285 10.5647C18.0285 9.78201 18.0285 9.0267 18.0285 8.27138C18.0285 7.65696 17.6177 7.24603 16.9955 7.24603C12.1906 7.24603 7.38965 7.24603 2.58474 7.24603C1.95478 7.24603 1.55177 7.65304 1.55177 8.28312C1.55177 11.7779 1.55177 15.2727 1.55177 18.7714C1.55177 19.4133 1.9587 19.8242 2.60039 19.8242C7.39747 19.8242 12.1946 19.8242 16.9916 19.8242C17.6177 19.8242 18.0324 19.4133 18.0324 18.7871C18.0324 18.0592 18.0324 17.3273 18.0324 16.5994C18.0324 16.5446 18.0246 16.4898 18.0207 16.4272C17.4299 16.4272 16.8547 16.4311 16.2834 16.4272C16.0291 16.4272 15.7748 16.4272 15.5243 16.3959C14.1392 16.2276 13.0671 15.0966 12.9615 13.7151C12.8597 12.3258 13.7479 11.0539 15.0978 10.6821C15.3756 10.6078 15.673 10.5804 15.9626 10.5726C16.6395 10.5569 17.3242 10.5647 18.0285 10.5647ZM9.12693 6.07588C9.12693 5.57103 9.12301 5.08966 9.12693 4.6083C9.13475 3.96647 9.5769 3.43032 10.2029 3.29726C10.3712 3.26203 10.5512 3.26203 10.7507 3.24247C10.6294 2.91764 10.5238 2.59282 10.3868 2.27973C10.3634 2.22886 10.2186 2.18972 10.1442 2.20537C9.98774 2.23668 9.83905 2.30713 9.68645 2.36583C7.60485 3.12115 5.52325 3.88038 3.44164 4.63569C3.19905 4.7257 3.17166 4.78441 3.26165 5.03096C3.36339 5.31274 3.47686 5.5906 3.56685 5.87238C3.61381 6.025 3.68815 6.07979 3.85249 6.07979C5.5389 6.07197 7.2214 6.07588 8.90781 6.07588C8.9665 6.07588 9.03302 6.07588 9.12693 6.07588ZM17.3673 11.7388C16.8782 11.7388 16.393 11.7349 15.9039 11.7388C14.9061 11.7505 14.1314 12.5137 14.1275 13.4842C14.1236 14.4626 14.9022 15.2453 15.9039 15.2532C16.9055 15.261 17.9072 15.2571 18.9089 15.2532C19.1398 15.2532 19.2024 15.1945 19.2024 14.9675C19.2024 13.9852 19.2024 13.0029 19.2024 12.0206C19.2024 11.7897 19.1476 11.7388 18.9089 11.7388C18.3924 11.7388 17.8798 11.7388 17.3673 11.7388ZM15.9587 6.07197C15.9587 5.57494 15.9626 5.09749 15.9547 4.61612C15.9508 4.47132 15.8374 4.43219 15.7043 4.43219C13.9866 4.43219 12.2728 4.43219 10.5551 4.43219C10.3751 4.43219 10.2929 4.51046 10.2968 4.69048C10.3008 5.00748 10.2968 5.32839 10.2968 5.64539C10.2968 5.78628 10.2968 5.92325 10.2968 6.06805C12.1946 6.07197 14.061 6.07197 15.9587 6.07197Z" fill="#515251" stroke="#515251" stroke-width="0.4"/><path d="M15.8831 13.5834C15.8699 13.5824 15.8492 13.5756 15.8287 13.5548C15.8066 13.5324 15.8005 13.5096 15.8005 13.4962C15.8005 13.4771 15.8082 13.4562 15.8268 13.438C15.8455 13.4198 15.8673 13.4122 15.8874 13.4127L15.8994 12.9128C16.2165 12.9207 16.4749 13.1869 16.471 13.508M15.8831 13.5834L15.8871 13.4127C15.9068 13.4132 15.9279 13.4216 15.9455 13.4398C15.962 13.457 15.9703 13.4774 15.971 13.4983M15.8831 13.5834C15.8985 13.5825 15.9203 13.5752 15.9412 13.5548C15.9622 13.5344 15.9698 13.5131 15.971 13.4983M15.8831 13.5834L15.971 13.4983M16.471 13.508L15.9711 13.4955C15.9711 13.4964 15.971 13.4973 15.971 13.4983M16.471 13.508L15.971 13.5019C15.971 13.5007 15.971 13.4995 15.971 13.4983M16.471 13.508L15.971 13.4983" fill="#515251" stroke="#515251"/></svg>',
  },
  {
    href: "Employee Management",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M15.3779 6.25V8.75M15.3779 8.75V11.25M15.3779 8.75H17.8779M15.3779 8.75H12.8779M11.0029 5.3125C11.0029 6.8658 9.74373 8.125 8.19043 8.125C6.63713 8.125 5.37793 6.8658 5.37793 5.3125C5.37793 3.7592 6.63713 2.5 8.19043 2.5C9.74373 2.5 11.0029 3.7592 11.0029 5.3125ZM2.8787 16.0286C2.87819 15.9983 2.87793 15.9679 2.87793 15.9375C2.87793 13.0035 5.25642 10.625 8.19043 10.625C11.1244 10.625 13.5029 13.0035 13.5029 15.9375V15.9396C13.5029 15.9693 13.5027 15.999 13.5022 16.0286C11.9507 16.9627 10.1333 17.5 8.19043 17.5C6.24753 17.5 4.43013 16.9627 2.8787 16.0286Z" stroke="#515251" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    href: "Payroll",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none"><g clip-path="url(#clip0_2098_2965)"> <path d="M13.5094 17.0472C9.63485 17.0472 5.757 17.0472 1.88247 17.0472C1.8625 17.0373 1.84253 17.0273 1.82256 17.0207C0.927154 16.8488 0.37793 16.2039 0.37793 15.311C0.37793 10.8302 0.37793 6.34598 0.37793 1.86511C0.37793 0.849882 1.09359 0.145508 2.11548 0.145508C4.61195 0.148815 7.10842 0.162042 9.6049 0.165349C10.0143 0.165349 10.3538 0.307547 10.6468 0.591942C11.9316 1.83534 13.2198 3.07544 14.5146 4.30892C14.8242 4.60324 14.964 4.94054 14.964 5.36383C14.9573 7.66875 14.9607 9.97368 14.9607 12.2786C14.9607 13.2971 14.964 14.3124 14.9607 15.3309C14.9573 16.1113 14.518 16.7429 13.8256 16.9645C13.7224 16.9943 13.6159 17.0174 13.5094 17.0472ZM9.24873 1.49473C9.1755 1.49142 9.12224 1.48481 9.06899 1.48481C6.78887 1.4782 4.50543 1.46828 2.22532 1.46166C1.7926 1.46166 1.70605 1.54764 1.70605 1.96762C1.70605 6.37575 1.70605 10.7806 1.70605 15.1887C1.70605 15.2449 1.70605 15.2978 1.70605 15.354C1.71271 15.5591 1.84918 15.7013 2.05889 15.7178C2.10882 15.7211 2.15875 15.7178 2.20868 15.7178C5.86351 15.7178 9.51835 15.7178 13.1732 15.7178C13.5393 15.7178 13.6325 15.6219 13.6325 15.2581C13.6325 12.1265 13.6325 8.99814 13.6325 5.86648C13.6325 5.80696 13.6325 5.75074 13.6325 5.68129C13.546 5.68129 13.4861 5.68129 13.4262 5.68129C12.6106 5.68129 11.7985 5.68129 10.9829 5.68129C9.96439 5.67799 9.24873 4.967 9.2454 3.95839C9.24207 3.1978 9.2454 2.44051 9.2454 1.67992C9.24873 1.62701 9.24873 1.56748 9.24873 1.49473ZM10.5769 2.36115C10.5769 2.92332 10.5769 3.4392 10.5769 3.95508C10.5769 4.23617 10.7067 4.36514 10.9929 4.36514C11.5022 4.36845 12.0115 4.36514 12.5208 4.36514C12.5541 4.36514 12.5873 4.35522 12.6439 4.3453C11.9549 3.68391 11.2859 3.04237 10.5769 2.36115Z" fill="#515251"/><path d="M7.6696 13.8505C9.05142 13.8505 10.4294 13.8505 11.8112 13.8505C12.3041 13.8505 12.6457 13.5111 12.6302 13.0522C12.6185 12.7206 12.3779 12.4198 12.0518 12.3427C11.9587 12.3196 11.8616 12.3118 11.7646 12.3118C9.03589 12.3118 6.3072 12.3118 3.5785 12.3118C3.12824 12.3118 2.82549 12.5355 2.73621 12.925C2.63529 13.353 2.95358 13.7965 3.39219 13.8428C3.48146 13.8505 3.57073 13.8505 3.66389 13.8505C4.99913 13.8505 6.33437 13.8505 7.6696 13.8505Z" fill="#515251"/>path d="M6.66873 10.7731C7.72062 10.7731 8.77251 10.7769 9.82439 10.7692C10.4066 10.7654 10.7831 10.2139 10.5541 9.70492C10.4027 9.36557 10.1233 9.23061 9.76229 9.23061C8.77639 9.23061 7.7866 9.23061 6.8007 9.23061C5.72164 9.23061 4.64647 9.23061 3.56741 9.23061C3.15985 9.23061 2.86485 9.42727 2.75229 9.75891C2.58539 10.2602 2.94637 10.7615 3.49366 10.7654C4.40969 10.7731 5.32573 10.7692 6.24177 10.7692C6.38538 10.7731 6.529 10.7731 6.66873 10.7731Z" fill="#515251"/> <path d="M5.67489 7.69209C6.40461 7.69209 7.13045 7.69595 7.86017 7.68823C8.20951 7.68438 8.4851 7.45301 8.57437 7.11752C8.65976 6.80902 8.54332 6.46582 8.25997 6.29615C8.128 6.21903 7.96109 6.15733 7.80971 6.15733C6.37744 6.14576 4.94516 6.14961 3.51677 6.15347C3.09369 6.15347 2.77928 6.43112 2.72106 6.82445C2.66672 7.18307 2.89961 7.54555 3.26447 7.65353C3.36539 7.68438 3.48184 7.68823 3.59052 7.68823C4.28531 7.69595 4.9801 7.69209 5.67489 7.69209Z" fill="#515251"/></g><defs><clipPath id="clip0_2098_2965"><rect width="17.0126" height="19.709" fill="white" transform="translate(0.37793 0.145508)"/></clipPath></defs></svg>',
  },
  {
    href: "Compliance",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M9.83587 3.19683C9.78195 3.37168 9.75293 3.55745 9.75293 3.75C9.75293 4.09518 10.0328 4.375 10.3779 4.375H14.1279C14.4731 4.375 14.7529 4.09518 14.7529 3.75C14.7529 3.55745 14.7239 3.37168 14.67 3.19683M9.83587 3.19683C10.0719 2.43131 10.7849 1.875 11.6279 1.875H12.8779C13.7209 1.875 14.434 2.43131 14.67 3.19683M9.83587 3.19683C9.52282 3.21548 9.21074 3.23774 8.89967 3.26356C7.95709 3.34179 7.25293 4.14437 7.25293 5.09018V6.875M14.67 3.19683C14.983 3.21548 15.2951 3.23774 15.6062 3.26356C16.5488 3.34179 17.2529 4.14436 17.2529 5.09018V13.75C17.2529 14.7855 16.4135 15.625 15.3779 15.625H13.5029M7.25293 6.875H4.44043C3.92266 6.875 3.50293 7.29473 3.50293 7.8125V17.1875C3.50293 17.7053 3.92266 18.125 4.44043 18.125H12.5654C13.0832 18.125 13.5029 17.7053 13.5029 17.1875V15.625M7.25293 6.875H12.5654C13.0832 6.875 13.5029 7.29473 13.5029 7.8125V15.625M6.62793 13.125L7.87793 14.375L10.3779 11.25" stroke="#515251" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    href: "Quick Loan",
    svg: '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2098_2928)"><path d="M12.2494 0.338623C12.675 0.422078 13.109 0.476324 13.5262 0.597334C16.009 1.29836 17.8659 3.49322 18.1705 6.05529C18.5628 9.3768 16.4931 12.4146 13.2884 13.2199C9.69983 14.1212 6.01947 11.7344 5.37686 8.08742C4.81771 4.93282 6.46595 1.93679 9.42443 0.785107C9.95437 0.580643 10.5344 0.509706 11.0935 0.376178C11.1478 0.36366 11.202 0.351141 11.2521 0.338623C11.5817 0.338623 11.9156 0.338623 12.2494 0.338623ZM16.9729 6.86898C16.9646 3.93971 14.6153 1.57793 11.7194 1.59045C8.84025 1.59879 6.49933 3.98561 6.50768 6.89402C6.51602 9.80242 8.8778 12.1725 11.757 12.1642C14.632 12.1559 16.9813 9.77321 16.9729 6.86898Z" fill="#515251"/><path d="M2.99425 15.5273C3.03597 15.3562 3.06101 15.206 3.11108 15.0641C3.399 14.2504 4.0124 13.8498 4.83026 13.6662C6.22395 13.3533 7.55089 13.4951 8.83192 14.1503C9.29093 14.3839 9.77497 14.5884 10.2674 14.7553C10.5636 14.8555 10.8891 14.893 11.2062 14.9055C11.8363 14.9264 12.4706 14.9097 13.1006 14.9139C13.5597 14.9139 13.8058 15.1684 13.7933 15.6274C13.7766 16.2492 13.5805 16.8083 13.205 17.3549C13.5138 17.3549 13.7933 17.3633 14.0687 17.3508C14.123 17.3466 14.1772 17.2715 14.2273 17.2214C14.8115 16.6372 15.3915 16.0489 15.9798 15.473C17.119 14.3589 18.9091 14.3255 20.0942 15.3896C20.4697 15.7276 20.4822 16.0906 20.1276 16.4453C18.6671 17.9099 17.2025 19.3704 15.742 20.8308C15.1787 21.3942 14.4985 21.6696 13.7057 21.6696C9.50791 21.6696 5.31012 21.6696 1.11233 21.6696C0.615777 21.6612 0.37793 21.4234 0.37793 20.931C0.37793 19.3704 0.37793 17.8098 0.37793 16.245C0.37793 15.7568 0.611604 15.5273 1.10816 15.5273C1.7299 15.5231 2.35581 15.5273 2.99425 15.5273ZM4.25442 20.4136C4.35456 20.4136 4.42967 20.4136 4.50478 20.4136C7.54254 20.4136 10.5845 20.4094 13.6222 20.4177C14.1313 20.4177 14.5486 20.2508 14.9075 19.8878C16.1509 18.636 17.3986 17.3925 18.6462 16.1448C18.688 16.1031 18.7213 16.0572 18.7714 16.003C18.7213 15.9821 18.6921 15.9612 18.6588 15.9529C17.9536 15.7317 17.3318 15.8778 16.8019 16.3994C16.1718 17.0253 15.5375 17.647 14.92 18.2855C14.6988 18.5108 14.461 18.6109 14.148 18.6068C12.1993 18.5984 10.2465 18.5984 8.29781 18.5984C8.0391 18.5984 7.78456 18.6026 7.52585 18.5901C7.28383 18.5775 7.10858 18.444 7.00843 18.227C6.91246 18.0142 6.93332 17.8056 7.07102 17.6136C7.21707 17.405 7.42988 17.3424 7.6719 17.3424C8.59408 17.3466 9.51626 17.3466 10.4426 17.3466C10.622 17.3466 10.8056 17.3466 10.9809 17.3299C11.6193 17.259 12.2494 16.7415 12.408 16.1532C12.0283 16.1532 11.6569 16.149 11.2855 16.1532C10.6971 16.1615 10.1213 16.0697 9.57885 15.8444C9.07812 15.6399 8.58156 15.4271 8.09752 15.1851C7.05851 14.6719 5.99445 14.6385 4.89702 14.9389C4.44636 15.0599 4.25442 15.3186 4.25442 15.7818C4.25442 16.8834 4.25442 17.9892 4.25442 19.0908C4.25442 19.5248 4.25442 19.9546 4.25442 20.4136ZM2.99425 20.401C2.99425 19.1868 2.99425 17.9892 2.99425 16.7874C2.53524 16.7874 2.09293 16.7874 1.6381 16.7874C1.6381 17.9975 1.6381 19.1951 1.6381 20.401C2.09293 20.401 2.53524 20.401 2.99425 20.401Z" fill="#515251"/><g clip-path="url(#clip1_2098_2928)"><path d="M12.7684 5.00518C12.7684 4.84415 12.7723 4.68272 12.7684 4.52168C12.7653 4.43647 12.7973 4.41341 12.8783 4.41459C13.1077 4.41888 13.3375 4.42045 13.5666 4.41459C13.6643 4.41185 13.692 4.44468 13.6905 4.53966C13.6854 4.84219 13.6932 5.14511 13.6866 5.44803C13.6842 5.55904 13.7104 5.60438 13.8312 5.59969C14.0946 5.59343 14.095 5.59969 14.095 5.87095C14.095 6.03198 14.0915 6.19341 14.095 6.35445C14.0974 6.43262 14.0766 6.46389 13.9903 6.46545C13.6877 6.47171 13.6877 6.47562 13.6877 6.78557C13.6877 6.93684 13.6916 7.08849 13.6877 7.23976C13.685 7.32262 13.7131 7.34763 13.796 7.35037C14.095 7.35897 14.095 7.3621 14.095 7.65876C14.095 7.81003 14.0915 7.96168 14.095 8.11295C14.0978 8.19503 14.0704 8.22044 13.9867 8.222C13.6873 8.22825 13.6877 8.23177 13.6877 8.53039C13.6877 8.75983 13.6842 8.98966 13.6877 9.2187C13.6877 9.30938 13.6576 9.33596 13.5705 9.33401C13.3168 9.32893 13.0624 9.32854 12.8087 9.33401C12.773 9.33747 12.7371 9.32992 12.7058 9.31239C12.6745 9.29485 12.6493 9.26816 12.6336 9.2359C12.4522 8.93494 12.263 8.63866 12.0832 8.33691C12.0332 8.25249 11.9797 8.21457 11.8765 8.21653C11.5298 8.22395 11.1831 8.22239 10.8364 8.21653C10.7402 8.21653 10.7121 8.24428 10.714 8.33965C10.7199 8.62772 10.7117 8.91578 10.7183 9.20385C10.7207 9.3086 10.6867 9.33675 10.5854 9.33323C10.3658 9.32619 10.1457 9.32463 9.92644 9.33323C9.81114 9.33831 9.7873 9.29414 9.78925 9.19056C9.79551 8.91227 9.78651 8.63397 9.79355 8.35567C9.79629 8.24858 9.76932 8.21223 9.65636 8.21496C9.39643 8.22122 9.39604 8.21496 9.39604 7.95817C9.39604 7.78736 9.39917 7.61616 9.39604 7.44535C9.39604 7.36718 9.42301 7.34724 9.49767 7.34451C9.79277 7.33278 9.79277 7.33005 9.79277 7.03182C9.79277 6.88055 9.78847 6.7289 9.79277 6.57763C9.7959 6.49008 9.76893 6.46037 9.67785 6.46037C9.39604 6.45764 9.39604 6.45373 9.39604 6.16644C9.39604 6.01518 9.40073 5.86352 9.39604 5.71226C9.39213 5.62314 9.42027 5.595 9.51095 5.595C9.79355 5.5907 9.79355 5.5864 9.79355 5.29638C9.79355 5.04231 9.79629 4.78825 9.79355 4.53458C9.79355 4.44898 9.81466 4.41263 9.90846 4.41498C10.1574 4.42084 10.4064 4.42006 10.6554 4.41498C10.6889 4.41229 10.7225 4.41991 10.7515 4.43682C10.7806 4.45372 10.8038 4.47911 10.818 4.50956C11.0134 4.83555 11.2175 5.15762 11.4129 5.48438C11.4606 5.56255 11.511 5.60164 11.6083 5.60164C11.955 5.59539 12.3017 5.59617 12.6484 5.60164C12.7438 5.60164 12.777 5.57389 12.7727 5.47696C12.7653 5.32061 12.7727 5.16426 12.7727 5.00792L12.7684 5.00518ZM12.0121 6.46311C12.1939 6.75977 12.3604 7.03299 12.5292 7.30503C12.5757 7.37968 12.6535 7.34646 12.7172 7.34412C12.7954 7.34099 12.7665 7.2722 12.7669 7.22959C12.7696 7.00993 12.7669 6.79026 12.7669 6.5706C12.7669 6.51744 12.777 6.46115 12.6914 6.46233C12.4753 6.46506 12.2576 6.46311 12.0121 6.46311ZM11.4676 7.34724L10.9501 6.50845C10.9032 6.43223 10.827 6.4635 10.7641 6.46623C10.6859 6.47014 10.7179 6.53933 10.7176 6.58076C10.7144 6.80003 10.7176 7.01931 10.7176 7.23858C10.7176 7.29018 10.7035 7.3492 10.7906 7.34802C11.0064 7.34568 11.2233 7.34724 11.4676 7.34724Z" fill="#515251"/></g></g><defs><clipPath id="clip0_2098_2928"><rect width="20" height="21.3228" fill="white" transform="translate(0.37793 0.338623)"/></clipPath><clipPath id="clip1_2098_2928"><rect width="4.70054" height="4.92138" fill="white" transform="translate(9.39319 4.41388)"/></clipPath></defs></svg>',
  },
  {
    href: "Book keeping",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M18.0196 1.71669C17.4223 1.6138 16.8174 1.56084 16.2113 1.55835C14.1433 1.55666 12.1184 2.14966 10.378 3.26669C8.63308 2.16433 6.6085 1.58588 4.54463 1.60002C3.9385 1.6025 3.33363 1.65546 2.73629 1.75835C2.54063 1.79209 2.36344 1.89457 2.23664 2.04735C2.10983 2.20013 2.04174 2.39316 2.04463 2.59169V12.5917C2.04284 12.7141 2.06806 12.8355 2.1185 12.9471C2.16894 13.0586 2.24335 13.1577 2.33644 13.2373C2.42953 13.3169 2.53901 13.3749 2.65709 13.4074C2.77517 13.4398 2.89895 13.4458 3.01963 13.425C4.21381 13.2183 5.43729 13.2526 6.61801 13.5259C7.79874 13.7993 8.91281 14.3061 9.89463 15.0167L9.99463 15.075H10.0863C10.1787 15.1135 10.2778 15.1334 10.378 15.1334C10.4781 15.1334 10.5772 15.1135 10.6696 15.075H10.7613L10.8613 15.0167C11.8363 14.2903 12.9471 13.767 14.1281 13.4778C15.309 13.1887 16.536 13.1395 17.7363 13.3334C17.857 13.3542 17.9807 13.3482 18.0988 13.3157C18.2169 13.2833 18.3264 13.2252 18.4195 13.1456C18.5126 13.0661 18.587 12.967 18.6374 12.8554C18.6879 12.7438 18.7131 12.6225 18.7113 12.5V2.50002C18.7026 2.31015 18.6293 2.12895 18.5035 1.98647C18.3777 1.84399 18.207 1.7488 18.0196 1.71669ZM9.54463 12.7917C8.00286 11.9806 6.28672 11.5573 4.54463 11.5584C4.26963 11.5584 3.99463 11.5584 3.71129 11.5584V3.22502C3.98884 3.20902 4.26708 3.20902 4.54463 3.22502C6.32245 3.22305 8.06147 3.74476 9.54463 4.72502V12.7917ZM17.0446 11.5917C16.7613 11.5917 16.4863 11.5917 16.2113 11.5917C14.4692 11.5906 12.7531 12.0139 11.2113 12.825V4.72502C12.6944 3.74476 14.4335 3.22305 16.2113 3.22502C16.4888 3.20902 16.7671 3.20902 17.0446 3.22502V11.5917ZM18.0196 15.05C17.4223 14.9471 16.8174 14.8942 16.2113 14.8917C14.1433 14.89 12.1184 15.483 10.378 16.6C8.63756 15.483 6.61266 14.89 4.54463 14.8917C3.9385 14.8942 3.33363 14.9471 2.73629 15.05C2.62782 15.0672 2.52381 15.1057 2.43026 15.1633C2.33671 15.2208 2.25546 15.2963 2.19118 15.3854C2.1269 15.4744 2.08086 15.5753 2.05571 15.6822C2.03056 15.7891 2.02679 15.9 2.04463 16.0084C2.08698 16.2248 2.21337 16.4156 2.39612 16.5389C2.57887 16.6623 2.80308 16.7083 3.01963 16.6667C4.21381 16.4599 5.43729 16.4942 6.61801 16.7676C7.79874 17.0409 8.91281 17.5478 9.89463 18.2584C10.0358 18.3588 10.2047 18.4128 10.378 18.4128C10.5512 18.4128 10.7202 18.3588 10.8613 18.2584C11.8431 17.5478 12.9572 17.0409 14.1379 16.7676C15.3186 16.4942 16.5421 16.4599 17.7363 16.6667C17.9528 16.7083 18.177 16.6623 18.3598 16.5389C18.5426 16.4156 18.6689 16.2248 18.7113 16.0084C18.7291 15.9 18.7254 15.7891 18.7002 15.6822C18.6751 15.5753 18.629 15.4744 18.5647 15.3854C18.5005 15.2963 18.4192 15.2208 18.3257 15.1633C18.2321 15.1057 18.1281 15.0672 18.0196 15.05Z" fill="#515251"/></svg>',
  },
  {
    href: "Support",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M16.578 10.8334C16.3946 10.8334 16.203 10.775 16.0196 10.7334C15.6484 10.6516 15.2835 10.5429 14.928 10.4084C14.5414 10.2677 14.1164 10.275 13.7349 10.4289C13.3533 10.5827 13.0422 10.8722 12.8613 11.2417L12.678 11.6167C11.8663 11.1652 11.1204 10.6044 10.4613 9.95003C9.80693 9.29088 9.24614 8.54503 8.79462 7.73337L9.14462 7.50003C9.51409 7.31913 9.8036 7.00797 9.95745 6.62644C10.1113 6.24491 10.1186 5.81996 9.97795 5.43337C9.84564 5.07705 9.73707 4.71236 9.65295 4.3417C9.61129 4.15837 9.57795 3.9667 9.55295 3.77503C9.45176 3.18805 9.14431 2.65648 8.68597 2.27607C8.22763 1.89565 7.64853 1.69137 7.05295 1.70003H4.55295C4.19381 1.69666 3.83816 1.77071 3.51021 1.91714C3.18226 2.06357 2.88971 2.27895 2.65248 2.5486C2.41524 2.81826 2.2389 3.13586 2.13544 3.47979C2.03199 3.82373 2.00385 4.18591 2.05295 4.5417C2.4969 8.03285 4.09131 11.2766 6.58433 13.7606C9.07735 16.2445 12.3269 17.8271 15.8196 18.2584H16.1363C16.7508 18.2593 17.3441 18.0338 17.803 17.625C18.0666 17.3892 18.2772 17.1002 18.4208 16.777C18.5645 16.4537 18.6379 16.1037 18.6363 15.75V13.25C18.6261 12.6712 18.4153 12.1138 18.0399 11.6731C17.6645 11.2323 17.1478 10.9356 16.578 10.8334ZM16.9946 15.8334C16.9945 15.9517 16.9691 16.0686 16.9203 16.1764C16.8714 16.2841 16.8002 16.3803 16.7113 16.4584C16.6182 16.5388 16.5093 16.5988 16.3916 16.6347C16.2739 16.6706 16.1501 16.6815 16.028 16.6667C12.907 16.2665 10.0081 14.8388 7.78855 12.6086C5.56895 10.3784 4.15496 7.47281 3.76962 4.35003C3.75636 4.22796 3.76798 4.10447 3.80379 3.98703C3.8396 3.86958 3.89884 3.76061 3.97795 3.6667C4.05604 3.57781 4.15217 3.50657 4.25993 3.45771C4.3677 3.40886 4.48463 3.38352 4.60295 3.38337H7.10295C7.29674 3.37905 7.48597 3.44243 7.63807 3.56259C7.79017 3.68275 7.89563 3.85217 7.93629 4.0417C7.96962 4.26948 8.01129 4.49448 8.06129 4.7167C8.15755 5.15599 8.28567 5.58768 8.44462 6.00837L7.27795 6.55003C7.1782 6.5958 7.08847 6.66082 7.01392 6.74136C6.93936 6.8219 6.88145 6.91638 6.84351 7.01936C6.80557 7.12235 6.78835 7.23181 6.79283 7.34147C6.79731 7.45113 6.8234 7.55882 6.86962 7.65837C8.06895 10.2273 10.134 12.2924 12.703 13.4917C12.9058 13.575 13.1334 13.575 13.3363 13.4917C13.4402 13.4545 13.5357 13.3971 13.6173 13.3227C13.6988 13.2483 13.7648 13.1585 13.8113 13.0584L14.328 11.8917C14.7588 12.0458 15.1984 12.1738 15.6446 12.275C15.8668 12.325 16.0918 12.3667 16.3196 12.4C16.5091 12.4407 16.6786 12.5461 16.7987 12.6982C16.9189 12.8503 16.9823 13.0396 16.978 13.2334L16.9946 15.8334Z" fill="#515251"/></svg>',
  },
  {
    href: "Settings",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M8.08626 18.3334L7.75293 15.6667C7.57237 15.5972 7.4021 15.5139 7.2421 15.4167C7.0821 15.3195 6.92599 15.2153 6.77376 15.1042L4.2946 16.1459L2.00293 12.1875L4.14876 10.5625C4.13487 10.4653 4.12793 10.3714 4.12793 10.2809V9.71919C4.12793 9.62863 4.13487 9.53474 4.14876 9.43752L2.00293 7.81252L4.2946 3.85419L6.77376 4.89585C6.92654 4.78474 7.08626 4.68058 7.25293 4.58335C7.4196 4.48613 7.58626 4.4028 7.75293 4.33335L8.08626 1.66669H12.6696L13.0029 4.33335C13.1835 4.4028 13.3538 4.48613 13.5138 4.58335C13.6738 4.68058 13.8299 4.78474 13.9821 4.89585L16.4613 3.85419L18.7529 7.81252L16.6071 9.43752C16.621 9.53474 16.6279 9.62863 16.6279 9.71919V10.2809C16.6279 10.3714 16.614 10.4653 16.5863 10.5625L18.7321 12.1875L16.4404 16.1459L13.9821 15.1042C13.8293 15.2153 13.6696 15.3195 13.5029 15.4167C13.3363 15.5139 13.1696 15.5972 13.0029 15.6667L12.6696 18.3334H8.08626ZM10.4196 12.9167C11.2252 12.9167 11.9127 12.632 12.4821 12.0625C13.0515 11.4931 13.3363 10.8056 13.3363 10C13.3363 9.19446 13.0515 8.50696 12.4821 7.93752C11.9127 7.36808 11.2252 7.08335 10.4196 7.08335C9.60015 7.08335 8.90904 7.36808 8.34626 7.93752C7.78349 8.50696 7.50237 9.19446 7.50293 10C7.50293 10.8056 7.78404 11.4931 8.34626 12.0625C8.90849 12.632 9.5996 12.9167 10.4196 12.9167ZM10.4196 11.25C10.0724 11.25 9.7771 11.1284 9.53376 10.885C9.29043 10.6417 9.16904 10.3467 9.1696 10C9.1696 9.6528 9.29126 9.35752 9.5346 9.11419C9.77793 8.87085 10.0729 8.74946 10.4196 8.75002C10.7668 8.75002 11.0621 8.87169 11.3054 9.11502C11.5488 9.35835 11.6702 9.65335 11.6696 10C11.6696 10.3472 11.5479 10.6425 11.3046 10.8859C11.0613 11.1292 10.7663 11.2506 10.4196 11.25ZM9.5446 16.6667H11.1904L11.4821 14.4584C11.9127 14.3472 12.3121 14.1839 12.6804 13.9684C13.0488 13.7528 13.3854 13.4925 13.6904 13.1875L15.7529 14.0417L16.5654 12.625L14.7738 11.2709C14.8432 11.0764 14.8918 10.8717 14.9196 10.6567C14.9474 10.4417 14.9613 10.2228 14.9613 10C14.9613 9.7778 14.9474 9.55919 14.9196 9.34419C14.8918 9.12919 14.8432 8.92419 14.7738 8.72919L16.5654 7.37502L15.7529 5.95835L13.6904 6.83335C13.3849 6.51391 13.0482 6.24669 12.6804 6.03169C12.3127 5.81669 11.9132 5.65335 11.4821 5.54169L11.2113 3.33335H9.56543L9.27376 5.54169C8.84321 5.6528 8.44404 5.81613 8.07626 6.03169C7.70849 6.24724 7.37154 6.50752 7.06543 6.81252L5.00293 5.95835L4.19043 7.37502L5.9821 8.70835C5.91265 8.91669 5.86404 9.12502 5.83626 9.33335C5.80849 9.54169 5.7946 9.76391 5.7946 10C5.7946 10.2222 5.80849 10.4375 5.83626 10.6459C5.86404 10.8542 5.91265 11.0625 5.9821 11.2709L4.19043 12.625L5.00293 14.0417L7.06543 13.1667C7.37099 13.4861 7.70793 13.7536 8.07626 13.9692C8.4446 14.1847 8.84376 14.3478 9.27376 14.4584L9.5446 16.6667Z" fill="#515251"/></svg>',
  },
];

const NavComp = () => {
  return (
    <ul className={styles.sidebar_links_container}>
      {sideBarLinks.map((details, i) => {
        return (
          <li key={i}>
            {typeof details.svg === "string" && (
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(details.svg),
                }}
              ></span>
            )}

            <span>{details.href}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default NavComp;
