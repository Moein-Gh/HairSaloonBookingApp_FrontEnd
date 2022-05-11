import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const categoryItems = [
  {
    key: 1,
    icon: (
      <svg id="Layer_1" height="60" viewBox="0 0 491.246 491.246" width="60">
        <g>
          <path d="m427.697 427.113c3.338 7.055 5.03 14.603 5.03 22.435v36.215h15v-36.215c0-10.067-2.178-19.774-6.472-28.85z" />
          <path d="m183.525 193.467h15v15h-15z" />
          <path d="m253.343 193.467h15v15h-15z" />
          <path d="m491.246 149.193-16.467-16.933c.357-1.041.664-2.104.909-3.193 1.761-7.818.371-15.853-3.912-22.625-4.284-6.772-10.948-11.471-18.766-13.231-1.805-.406-3.608-.631-5.395-.702l-45.551-10.254 45.547-10.254c1.788-.072 3.593-.296 5.4-.703 7.817-1.76 14.481-6.458 18.766-13.231 4.283-6.772 5.673-14.808 3.913-22.625s-6.459-14.482-13.231-18.766-14.805-5.673-22.625-3.914c-16.138 3.633-26.312 19.718-22.679 35.856 1.155 5.129 3.574 9.649 6.846 13.321l-48.338 10.882 1.476-6.558c3.33-14.793-5.996-29.538-20.789-32.868l-35.875-8.076v-19.835h-15v83.14l-58.241 13.111-7.847 1.771 2.239 7.465c.852 3.686 2.143 7.197 3.825 10.479-5.511.909-11.218 1.38-17.076 1.38-11.311 0-22.414-1.78-32.11-5.146-14.043-4.876-29.033-2.811-41.127 5.667-1.419.995-2.763 2.062-4.039 3.188v-3.08c0-33.374 25.238-60.95 57.628-64.683v17.121h15v-70.413h-15v38.194c-40.678 3.794-72.628 38.126-72.628 79.78v37 11.992h-3.791c-14.457 0-26.219 11.762-26.219 26.219v6.217c0 14.457 11.762 26.219 26.219 26.219h3.791v17.145c0 30.58 17.225 57.204 42.477 70.705v37.165l-117.553 27.73c-30.617 7.223-52.001 34.239-52.001 65.697v36.215h15v-36.215c0-24.467 16.632-45.479 40.445-51.097l114.97-27.123c4.323 23.086 24.615 40.616 48.937 40.616s44.613-17.531 48.937-40.616l114.97 27.123c10.803 2.548 20.353 8.327 27.617 16.71l11.336-9.822c-9.341-10.781-21.62-18.211-35.51-21.488l-117.551-27.732v-37.255c25.156-13.531 42.3-40.105 42.3-70.614v-17.145h4.295c14.457 0 26.219-11.762 26.219-26.219v-6.217c0-14.457-11.762-26.219-26.219-26.219h-4.295v-33.261l35.875-8.076c7.166-1.613 13.275-5.92 17.201-12.128 3.927-6.208 5.2-13.573 3.588-20.739l-1.476-6.558 48.334 10.881c-3.272 3.672-5.689 8.194-6.844 13.323-3.632 16.138 6.542 32.223 22.68 35.856 2.21.498 4.437.743 6.647.743 5.611 0 11.12-1.584 15.978-4.657 1.347-.852 2.609-1.802 3.785-2.833l14.249 14.652zm-170.267 38.256h3.791c6.186 0 11.219 5.033 11.219 11.219v6.217c0 6.186-5.033 11.219-11.219 11.219h-3.791zm122.149-160.052c1.104-.249 2.218-.372 3.323-.372 2.806 0 5.56.792 7.989 2.328 3.386 2.142 5.735 5.474 6.615 9.383s.185 7.926-1.957 11.313c-2.142 3.386-5.474 5.735-9.383 6.615-8.067 1.816-16.112-3.271-17.928-11.339-1.815-8.069 3.272-16.112 11.341-17.928zm-90.073 20.634c6.725 1.514 10.964 8.216 9.449 14.94l-2.223 9.878-39.807-8.961v-23.192zm-32.58 31.232 13.29 2.991-13.29 2.992zm-188.167 136.841c-6.186 0-11.219-5.033-11.219-11.219v-6.217c0-6.186 5.033-11.219 11.219-11.219h3.791v28.654h-3.791zm130.867 136.564v9.475c0 19.188-15.611 34.8-34.8 34.8s-34.8-15.611-34.8-34.8v-.088-9.475-27.484c7.188 2.123 14.785 3.281 22.651 3.281h24.121c7.93 0 15.588-1.176 22.828-3.332zm42.3-104.419c0 35.912-29.216 65.128-65.127 65.128h-24.121c-35.912 0-65.128-29.216-65.128-65.128v-17.145-58.654-11.992c0-.302.002-.604.006-.905v-.004c.134-9.661 4.742-18.377 12.642-23.915 8.103-5.679 18.162-7.056 27.597-3.78 11.26 3.91 24.065 5.977 37.031 5.977 9.489 0 18.673-1.076 27.386-3.175 1.772 1.554 3.672 2.987 5.703 4.271 7.308 4.622 15.592 7.003 24.032 7.003 3.324 0 6.674-.37 9.997-1.118l9.981-2.247v105.684zm55.399-137.283c-1.785 2.822-4.562 4.779-7.819 5.513l-60.856 13.7c-7.844 1.767-15.915.372-22.716-3.929-4.634-2.931-8.301-6.973-10.726-11.734l101.524-22.856 2.223 9.878c.733 3.258.154 6.606-1.63 9.428zm93.566 24.19c-3.387 2.142-7.403 2.836-11.313 1.957-8.069-1.817-13.156-9.859-11.341-17.928 1.816-8.068 9.855-13.156 17.929-11.339 3.909.88 7.241 3.229 9.383 6.615s2.837 7.404 1.956 11.313c-.878 3.908-3.228 7.24-6.614 9.382z" />
          <path d="m241.875 5.484h15v70.412h-15z" />
          <path d="m271.875 35.921h15v39.975h-15z" />
          <path d="m271.875 5.484h15v15.375h-15z" />
          <path d="m82.375 349.359v-15h-29.5v-15h29.5v-15h-29.5v-15h29.5v-15h-29.5v-15h29.5v-15h-29.5v-15h29.5v-15h-29.5v-15h29.5v-15h-54.875c-15.164 0-27.5 12.336-27.5 27.5v25.063h15v-25.063c0-6.893 5.607-12.5 12.5-12.5h10.375v135h-10.375c-6.893 0-12.5-5.607-12.5-12.5v-70h-15v70c0 15.164 12.336 27.5 27.5 27.5z" />
          <g>
            <path d="m45.875 23.938h15v15h-15z" />
            <path d="m45.875 53.938h15v15h-15z" />
            <path d="m60.875 38.938h15v15h-15z" />
            <path d="m30.875 38.938h15v15h-15z" />
          </g>
          <path d="m75.875 118.421h15v15h-15z" />
          <path d="m398.8 238.296h15v15h-15z" />
        </g>
      </svg>
    ),
    title: "مخصوص آقایان",
    link: "/men",
  },
  {
    key: 2,
    icon: (
      <svg id="Capa_1" height="60" viewBox="0 0 512 512" width="60">
        <g>
          <path d="m464.843 309.624c-1.257-.197-4.696-.762-5.155-.837 34.407-39.071 50.214-95.015 41.294-146.64-1.693-9.853-13.059-14.613-21.202-8.893-1.907 1.335-3.865 2.534-5.865 3.621-6.723-24.717-23.008-44.412-48.541-58.686-.253-8.165-3.889-15.492-9.559-20.615l6.555-18.004c3.185 3.659 7.256 6.476 11.941 8.181 7.327 2.666 15.206 2.287 22.19-.969 7.025-3.276 12.354-9.092 15.006-16.376l4.165-11.443c2.651-7.285 2.307-15.165-.969-22.191-3.276-7.025-9.092-12.354-16.376-15.006-15.033-5.471-31.722 2.308-37.196 17.345l-18.779 51.595c-3.937-.826-7.994-.827-11.932 0l-18.78-51.595c-2.651-7.285-7.98-13.1-15.006-16.376-7.026-3.275-14.906-3.62-22.19-.969-7.285 2.651-13.1 7.98-16.376 15.006-3.276 7.025-3.62 14.906-.969 22.19l4.165 11.444c4.285 11.772 15.441 19.096 27.299 19.096 3.289 0 6.632-.563 9.896-1.751 4.685-1.705 8.757-4.523 11.942-8.182l6.555 18.004c-5.671 5.123-9.307 12.451-9.559 20.617-14.719 8.237-26.462 18.391-35.016 30.288-7.242-3.987-14.491-8.074-21.551-12.059-14.335-8.09-29.157-16.455-44.145-24.085-41.318-21.027-75.874-31.805-108.744-33.919-18.997-1.231-38.228.785-55.615 5.831-3.978 1.154-6.267 5.315-5.112 9.293 1.154 3.978 5.316 6.268 9.293 5.112 15.734-4.566 33.185-6.388 50.467-5.268 30.769 1.979 63.47 12.249 102.907 32.318 14.7 7.483 29.38 15.768 43.576 23.78 6.947 3.921 14.075 7.942 21.226 11.883-8.162 16.767-10.995 36.126-8.416 57.671 2.389 19.964 8.965 37.589 14.063 48.866 2.102 4.636 6.662 7.562 11.715 7.562 5.448 0 10.244-3.367 12.104-8.473 2.755-7.566 16.616-45.648 28.344-77.872 34.216 12.478 73.613 17.664 104.051-2.333 7.506 47.411-7.569 98.478-39.598 133.746-3.393 3.722-4.472 8.978-2.817 13.718 1.648 4.722 5.747 8.15 10.728 8.953 1.257.197 4.824.783 5.349.869-68.656 84.196-129.346 90.695-168.279 81.213-37.711-9.184-67.219-41.393-68.689-80.189-.5-13.069 1.789-25.941 4.212-39.569 3.253-18.294 6.617-37.21 2.796-56.923-.531-2.733-1.182-5.424-1.925-8.076 12.198 15.54 21.783 33.325 26.144 47.716 1.201 3.964 5.388 6.204 9.352 5.003s6.204-5.388 5.003-9.352c-8.872-29.281-35.899-69.378-66.006-86.45-10.975-10.445-24.288-17.634-38.897-20.924-12.512-2.828-25.186-2.338-27.7-1.713-1.614.401-3.201.841-4.762 1.316 6.439-4.349 13.427-7.889 20.743-10.395 19.092-6.539 49.43-9.085 85.531 15.927 3.405 2.359 8.077 1.511 10.436-1.894s1.511-8.077-1.894-10.436c-41.25-28.579-76.568-25.447-98.933-17.787-29.981 10.268-55.286 35.514-64.707 64.456-1.477 2.659-2.867 5.428-4.157 8.321-4.527 10.15-7.914 21.861-10.157 35.023-13.451 2.22-24.89 8.525-32.505 17.274-12.644-25.307-13.318-52.497-11.489-71.416 3.146-32.624 15.695-61.084 35.338-80.138 4.992-4.847 10.638-9.26 16.783-13.119 3.508-2.203 4.566-6.832 2.363-10.34-2.202-3.508-6.831-4.566-10.34-2.363-7.033 4.416-13.512 9.483-19.254 15.058-22.192 21.527-36.335 53.298-39.822 89.46-2.96 30.624 1.815 62.233 17.868 88.335-.957 3.335-1.463 6.819-1.463 10.405 0 23.054 21.489 42.013 48.737 43.876 8.736 19.999 23.212 38.243 41.582 52.097v44.434c0 .287-.187.536-.475.623-18.38 5.569-42.202 10.768-60.976 22.476-18.664 11.64-28.127 27.578-28.127 47.37v4.69c0 7.686 6.249 13.94 13.93 13.94h249.076c7.686 0 13.94-6.253 13.94-13.94-.488-2.782 3.374-25.136-17.487-44.09-3.065-2.786-7.808-2.559-10.594.507-2.786 3.065-2.559 7.808.507 10.594 15.161 13.776 12.174 29.571 12.574 31.929h-246.945v-3.63c0-14.672 6.694-25.68 21.065-34.642 16.72-10.428 39.937-15.56 57.379-20.846 6.66-2.008 11.135-8.028 11.135-14.981v-34.672c12.027 6.616 23.996 10.384 33.89 10.384 9.97 0 21.926-3.823 33.899-10.426v34.714c0 6.949 4.469 12.968 11.117 14.978 11.54 3.493 25.077 6.793 37.956 11.607 3.866 1.444 8.196-.505 9.651-4.399 1.45-3.88-.52-8.201-4.399-9.651-13.516-5.052-27.64-8.515-38.865-11.913-.275-.083-.46-.333-.46-.621v-44.469c2.801-2.11 5.556-4.351 8.235-6.718 14.304 23.686 38.416 41.368 66.239 48.144 10.352 2.521 20.759 3.779 31.198 3.779 24.616 0 49.403-6.998 74.019-20.939 27.489-15.567 54.335-39.479 79.791-71.065 3.091-3.829 3.876-8.856 2.1-13.445-1.787-4.611-5.773-7.814-10.645-8.565zm-11.646-293.764c3.519 1.281 6.329 3.855 7.911 7.249 1.583 3.394 1.749 7.202.468 10.721l-4.165 11.444c-1.281 3.519-3.855 6.329-7.249 7.911s-7.202 1.749-10.721.468-6.329-3.855-7.911-7.249c-1.569-3.366-1.752-7.142-.495-10.633.425-1.18-1.555 4.27 4.192-11.531 2.643-7.265 10.706-11.024 17.97-8.38zm-99.865 37.794c-7.266 2.644-15.326-1.115-17.97-8.379l-4.165-11.444c-2.65-7.282 1.096-15.32 8.379-17.97 7.281-2.651 15.321 1.097 17.97 8.379.428 1.176-1.518-4.273 4.183 11.503 2.623 7.259-1.13 15.266-8.397 17.911zm57.065 45.442c0 7.725-6.286 14.011-14.011 14.011s-14.011-6.286-14.011-14.011 6.286-14.011 14.011-14.011c7.726 0 14.011 6.285 14.011 14.011zm-68.518 137.755c-21.255-50.792-7.649-82.933-.619-94.618 6.766-11.247 16.806-20.926 29.884-28.865 2.708 4.771 6.725 8.705 11.565 11.304.001 0-33.818 92.917-40.83 112.179zm54.508-105.9 10.967 30.138c-6.859-1.692-13.497-3.792-19.73-6.063.831-2.283 6.841-18.795 8.763-24.075zm28.093 33.336-14.416-39.616c4.842-2.6 8.861-6.537 11.569-11.311 20.304 12.327 33.125 28.796 38.23 49.094-11.329 3.066-23.434 3.304-35.383 1.833zm-383.681 118.207c0-12.406 10.629-23.315 25.451-27.36-1.795 18.87-2.201 37.398 2.688 55.379-16.194-3.354-28.139-14.641-28.139-28.019zm167.452 43.173c.419 11.061 2.741 21.843 6.91 32.119-18.674 17.715-38.772 25.827-50.154 25.827-26.799 0-84.958-41.048-84.958-102.05 0-29.164 4.08-53.098 12.126-71.137 1.226-2.749 2.542-5.364 3.947-7.847.029-.053.064-.101.093-.155 9.362-17.44 23.93-28.011 43.006-32.904 7.249-.487 14.442.062 21.398 1.633 29.31 6.6 49.233 31.134 54.904 60.309 3.29 16.973.313 33.714-2.839 51.439-2.456 13.809-4.995 28.088-4.433 42.766z" />
          <path d="m182.984 320.712c-12.095 5.742-23.853 5.742-35.948 0-3.742-1.776-8.215-.184-9.992 3.558-1.776 3.742-.183 8.215 3.559 9.992 8.098 3.845 16.253 5.767 24.407 5.767 8.155 0 16.309-1.922 24.407-5.767 3.742-1.777 5.335-6.25 3.559-9.992-1.777-3.741-6.249-5.335-9.992-3.558z" />
          <path d="m136.379 260.83c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10.481c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5z" />
          <path d="m139.33 238.367c1.194.703 2.503 1.037 3.796 1.037 2.57 0 5.074-1.322 6.471-3.698 2.1-3.57.909-8.167-2.662-10.267-11.812-6.949-24.3-6.949-36.113 0-3.57 2.1-4.762 6.697-2.662 10.267s6.696 4.762 10.267 2.662c7.131-4.195 13.773-4.195 20.903-.001z" />
        </g>
      </svg>
    ),
    title: "مخصوص بانوان",
    link: "/women",
  },
  {
    key: 3,
    icon: (
      <svg id="Capa_1" height="60" viewBox="0 0 512 512" width="60">
        <g>
          <path d="m94.744 296.184c-8.817 5.23-14.744 14.842-14.744 25.816 0 16.542 13.458 30 30 30 13.036 0 24.152-8.361 28.28-20h77.72c16.542 0 30 13.458 30 30s-13.458 30-30 30h-120c-27.57 0-50 22.43-50 50s22.43 50 50 50h100c5.523 0 10-4.477 10-10s-4.477-10-10-10h-100c-16.542 0-30-13.458-30-30s13.458-30 30-30h120c27.57 0 50-22.43 50-50s-22.43-50-50-50h-77.72c-2.365-6.668-7.023-12.257-13.024-15.816l76.378-125.316c12.015-18.06 18.366-39.104 18.366-60.868 0-60.654-49.346-110-110-110s-110 49.346-110 110c0 21.764 6.351 42.808 18.366 60.868zm15.256 35.816c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-312c49.626 0 90 40.374 90 90 0 17.868-5.227 35.135-15.115 49.935-.077.115-.152.232-.224.351l-74.661 122.499s-74.808-122.735-74.885-122.85c-9.888-14.8-15.115-32.067-15.115-49.935 0-49.626 40.374-90 90-90z" />
          <path d="m110 160c27.57 0 50-22.43 50-50s-22.43-50-50-50-50 22.43-50 50 22.43 50 50 50zm0-80c16.542 0 30 13.458 30 30s-13.458 30-30 30-30-13.458-30-30 13.458-30 30-30z" />
          <path d="m402 166c-60.654 0-110 49.346-110 110 0 21.799 6.371 42.875 18.424 60.954l76.093 119.36c-5.892 3.565-10.461 9.101-12.796 15.686h-87.721c-5.523 0-10 4.477-10 10s4.477 10 10 10h87.72c4.128 11.639 15.243 20 28.28 20 16.542 0 30-13.458 30-30 0-10.881-5.823-20.426-14.516-25.686l76.093-119.36c12.052-18.079 18.423-39.155 18.423-60.954 0-60.654-49.346-110-110-110zm0 326c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm74.885-166.065c-.039.06-74.885 117.462-74.885 117.462s-74.846-117.403-74.885-117.462c-9.888-14.8-15.115-32.067-15.115-49.935 0-49.626 40.374-90 90-90s90 40.374 90 90c0 17.868-5.227 35.135-15.115 49.935z" />
          <path d="m402 226c-27.57 0-50 22.43-50 50s22.43 50 50 50 50-22.43 50-50-22.43-50-50-50zm0 80c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30z" />
          <circle cx="241" cy="482" r="10" />
        </g>
      </svg>
    ),
    title: "نزدیک ترین",
    link: "/nearest",
  },
  {
    key: 4,
    icon: (
      <svg id="Layer_3" height="60" viewBox="0 0 64 64" width="60">
        <g>
          <path d="m61 49.988v-3.988c0-.553-.448-1-1-1h-1.109c-.404-1.975-1.969-3.534-3.953-3.912-.405-2.943-2.74-5.355-5.746-5.785l-2.05-.293c-.29-.042-.578.046-.797.234-.219.191-.345.466-.345.756v.101c0 2.023-1.125 3.844-2.933 4.748-.198.1-.419.151-.64.151-1.889 0-3.427 1.537-3.427 3.427v.573h-1c-.552 0-1 .447-1 1v1.134l-3.089-.909-.478-3.823c2.279-1.805 3.882-4.417 4.386-7.403h.181c2.206 0 4-1.794 4-4v-2c0-.911-.318-1.741-.832-2.414l1.121-2.524c1.135-2.553 1.711-5.266 1.711-8.061 0-.369-.203-.708-.528-.882-.148-.079-.284-.136-.476-.118.656-1.579 1.004-3.285 1.004-5 0-.404-.244-.77-.617-.924-.375-.157-.805-.07-1.09.217l-.586.586c-.493.492-1.096.834-1.753 1.002-.144-1.738-.621-3.452-1.401-5.012l-.658-1.316c-.208-.415-.671-.632-1.125-.526-.451.107-.77.509-.77.973 0 1.085-.379 2.115-1.051 2.93-.199-1.752-.978-3.373-2.243-4.637-1.479-1.479-3.445-2.293-5.536-2.293h-4.17c-.404 0-.769.243-.924.617-.155.373-.069.804.216 1.09l.465.465c.891.892 1.612 1.907 2.145 3.01-1.249-1.381-3.027-2.182-4.923-2.182-1.502 0-2.976.517-4.15 1.455l-3.454 2.764c-.332.266-.459.712-.319 1.112.141.4.519.669.944.669.483 0 .961.039 1.429.116-2.115.402-3.938 1.816-4.833 3.829l-2.51 5.648c-.137.31-.109.667.076.951s.5.456.838.456c1.654 0 3 1.346 3 3v2.382c-.615.703-1 1.612-1 2.618v2c0 2.206 1.794 4 4 4h.181c.504 2.986 2.107 5.597 4.386 7.403l-.478 3.823-11.574 3.404c-3.247.955-5.515 3.986-5.515 7.37v5c0 .553.448 1 1 1h58c1.654 0 3-1.346 3-3v-5.838c0-1.659-.765-3.172-2-4.174zm-20-5.561c0-.787.64-1.427 1.427-1.427.528 0 1.057-.125 1.533-.361 2.177-1.089 3.633-3.139 3.967-5.496l.982.141c2.332.331 4.091 2.36 4.091 4.716 0 .553.448 1 1 1 1.302 0 2.402.839 2.816 2h-15.816zm-2 2.573h20v2h-20zm1-16c0 1.103-.897 2-2 2v-6c1.103 0 2 .897 2 2zm-28.576-16.242c.744-1.676 2.41-2.758 4.243-2.758.717 0 1.436.17 2.077.49l2.809 1.404c.44.22.972.088 1.258-.31.287-.398.243-.945-.104-1.292l-1.171-1.172c-1.413-1.413-3.152-2.38-5.048-2.831l1.591-1.272c.82-.656 1.851-1.017 2.9-1.017 1.556 0 3 .772 3.864 2.067l2.325 3.487c.245.366.702.53 1.122.402.421-.127.71-.516.71-.956 0-2.934-.96-5.72-2.732-8h1.902c1.557 0 3.021.606 4.122 1.707 1.102 1.101 1.708 2.564 1.708 4.122v1.171c0 .369.203.708.528.882.324.174.718.154 1.026-.05l.504-.336c.964-.643 1.724-1.512 2.23-2.512.468 1.285.712 2.651.712 4.016 0 .553.448 1 1 1 .976 0 1.915-.238 2.751-.687-.334 1.545-1 3.018-1.951 4.286l-.6.8c-.292.39-.262.934.073 1.288.334.354.875.416 1.281.145l1.341-.895c-.198 1.83-.678 3.61-1.435 5.312l-.916 2.062c-.475-.199-.996-.311-1.544-.311v-.023c0-1.405-.196-2.802-.582-4.151-.979-3.43-4.155-5.826-7.722-5.826-.527 0-1.057.053-1.575.156l-1.375.275c-1.89.378-3.823.569-5.746.569-1.654 0-3.173.58-4.372 1.542-.867-.969-2.118-1.542-3.428-1.542-.976 0-1.942.32-2.728.9zm-1.158 4.793 1.374-1.03c1.09-.817 2.781-.581 3.615.492-.789 1.132-1.255 2.506-1.255 3.987v2c-.347 0-.678.058-1 .142v-1.142c0-1.94-1.115-3.621-2.734-4.449zm1.734 11.449v-2c0-1.103.897-2 2-2v6c-1.103 0-2-.897-2-2zm4 2v-10c0-2.757 2.243-5 5-5 2.055 0 4.12-.204 6.138-.607l1.375-.275c.39-.079.788-.118 1.183-.118 2.679 0 5.063 1.799 5.799 4.374.335 1.172.505 2.384.505 3.603v8.023c0 5.514-4.486 10-10 10s-10-4.486-10-10zm10 12c2.01 0 3.904-.503 5.57-1.38l.438 3.504c.049.395.328.723.71.835l1.027.302c-1.498 2.923-4.454 4.739-7.745 4.739s-6.247-1.816-7.745-4.739l1.027-.302c.382-.112.661-.44.71-.835l.438-3.504c1.666.877 3.56 1.38 5.57 1.38zm-23 12c0-2.503 1.677-4.745 4.079-5.452l9.221-2.712.122.245c1.826 3.651 5.496 5.919 9.578 5.919s7.752-2.268 9.578-5.919l.122-.245 1.3.382v.77c-1.235 1.002-2 2.514-2 4.174v5.838c0 .352.072.686.184 1h-23.184v-4h-2v4h-7zm58 3c0 .552-.449 1-1 1h-22c-.551 0-1-.448-1-1v-5.838c0-1.415.879-2.665 2.195-3.162h19.611c1.315.497 2.194 1.747 2.194 3.162z" />
        </g>
      </svg>
    ),
    title: "حالت دهی",
    link: "/styling",
  },
  {
    key: 5,
    icon: (
      <svg
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        width="50"
        height="60"
      >
        <g>
          <g>
            <path d="M420.716,297.467c-1.249-9.935-6.814-14.182-11.265-15.995c-6.799-2.772-19.437-4.097-51.071,14.588    c2.877-11.921,1.744-24.753-3.796-36.274c10.905-13.613,23.343-32.327,21.606-46.221c-1.257-10.055-6.873-14.341-11.365-16.166    c-25.623-10.418-83.822,36.339-105.472,53.646c0.71-7.491-0.284-15.173-3.11-22.427c10.633-13.011,23.608-31.805,21.876-45.664    c-1.275-10.202-7.43-14.149-10.986-15.595c-14.487-5.89-37.978,7.069-54.385,17.329c-24.73,15.463-24.09,16.119-194.655,152.984    C6.595,346.9,0,360.649,0,375.392c0,16.181,0,90.44,0,106.878C0,498.663,13.337,512,29.73,512H45.8c4.143,0,7.5-3.357,7.5-7.5    c0-4.143-3.357-7.5-7.5-7.5H29.73c-8.121,0-14.729-6.607-14.729-14.729v-15.909l209.291-167.94    c6.434,36.15,46.878,37.856,70.027,20.886c14.526-10.662,35.649-31.529,49.185-46.56c4.113,14.813-0.775,31.201-13.283,41.237    c-0.135,0.108-31.247,25.071-228.135,183.015H80.802c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5c34.695,0,124.242,0,158.935,0    c13.874,0,27.475-4.782,38.296-13.466l52.622-42.227c3.23-2.593,3.748-7.313,1.155-10.545c-2.593-3.23-7.313-3.747-10.545-1.155    l-52.621,42.227c-8.169,6.555-18.436,10.165-28.908,10.165H126.115l144.038-115.58c1.319,7.159,3.735,12.569,6.439,16.408    c11.281,16.056,37.696,18.112,56.731,7.888c11.49-6.178,33.133-27.11,42.176-36.269c4.228,15.312-0.861,32.335-13.706,42.642    l-13.228,10.615c-3.23,2.593-3.747,7.313-1.155,10.545c2.592,3.229,7.312,3.746,10.545,1.155l13.227-10.615    c19.881-15.953,26.176-43.668,15.816-66.464C396.07,347.347,423.224,317.417,420.716,297.467z M220.806,197.342    c30.11-18.81,39.17-16.701,40.679-16.085c0.411,0.167,1.373,0.558,1.748,3.559c2.397,19.155-56.869,76.662-73.057,87.372    c-13.844,8.94-31.739,6.638-37.536-1.234c-4.228-5.737-4.303-14.226-4.658-18.274    C179.583,227.373,197.139,212.126,220.806,197.342z M226.211,277.64c-12.562,10.062-199.256,159.592-211.21,169.166v-71.414    c0-10.171,4.549-19.653,12.481-26.019l106.567-85.512c2.785,14.584,10.004,22.222,20.62,26.337    c9.895,3.835,22.179,4.108,33.847-0.365c16.169-6.202,44.232-34.921,55.823-47.571    C247.182,265.563,227.851,275.629,226.211,277.64z M285.559,307.129c-15.235,11.226-36.826,9.193-43.142-1.497    c-3.014-5.098-4.059-12.557-4.113-18.454c32.264-25.962,52.332-43.164,77.362-58.801c32.094-20.05,41.875-17.745,43.512-17.081    c0.551,0.224,1.697,0.691,2.127,4.129C363.893,236.128,302.761,294.486,285.559,307.129z M328.907,390.906    c-12.437,7.997-33.589,8.893-40.618-2.595c-3.201-5.275-4.071-13.095-4.156-18.111c40.472-32.333,52.695-43.183,76.603-58.032    c31.782-19.74,41.442-17.464,43.056-16.805c0.527,0.215,1.626,0.663,2.042,3.975C408.427,319.991,344.715,380.666,328.907,390.906    z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M504.5,40.452c4.143,0,7.5-3.357,7.5-7.5V20.155C512,9.042,502.958,0,491.845,0h-69.616    c-11.114,0-20.155,9.042-20.155,20.155v47.642c0,10.055,6.753,19.002,16.422,21.759l15.75,4.491v62.085    c0,4.555,1.411,8.786,3.815,12.283c-1.027,17.601-6.457,54.804-33.161,77.093c-7.277,6.072-7.187,17.324,0.157,23.375    c12.903,9.505,17.023,17.165,27.743,17.165c7.262,0,13.959-4.003,17.29-10.636c8.018-15.974,21.465-50.716,22.606-105.398    c3.135-3.768,5.024-8.609,5.024-13.882v-49.688c3.483,0.252,14.746,7.381,26.041-1.142c5.236-3.951,8.24-9.981,8.24-16.541V67.954    c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v20.807c0,1.812-0.829,3.477-2.275,4.567c-3.813,2.881-6.491-0.14-22.447-4.036    c-9.724-2.773-39.722-11.327-49.668-14.163c-3.259-0.929-5.534-3.944-5.534-7.332V20.155c0-2.794,2.36-5.154,5.154-5.154h69.616    c2.794,0,5.154,2.36,5.154,5.154v12.797C496.999,37.095,500.356,40.452,504.5,40.452z M436.682,268.682    c-1.239,2.465-4.467,3.139-6.62,1.364l-15.469-12.742c-0.141-0.116-0.091-0.275-0.083-0.28    c23.219-19.379,34.56-49.391,37.835-79.454c1.672,0.279,3.442,0.362,5.094,0.251C455.312,224.853,443.734,254.635,436.682,268.682    z M449.244,98.325l13.474,3.842v53.965c0,2.028-0.905,3.846-2.328,5.081c-4.469,3.803-11.146,0.601-11.146-5.081V98.325z" />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    ),
    title: "ناخن",
    link: "/nail",
  },
];

const Categories = () => {
  return (
    <>
      <Row className="defaultContainer mt-3">
        <Col lg={2} className="categoryTextContainer">
          <h2 className="categoryText">دسته بندی آرایشگاه ها</h2>
        </Col>
        {categoryItems.map((item) => {
          return (
            <Col className="categoryItem flex-center" key={item.key}>
              <Link to={item.link}>
                <Row className="categoryImageContainer">{item.icon}</Row>
              </Link>
              <h4 className="categoryTitle">{item.title}</h4>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Categories;
