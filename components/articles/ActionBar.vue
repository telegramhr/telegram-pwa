<template>
  <div class="action-bar">
    <div v-if="showCopiedNotification" class="copied-notification">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3333 4L6 11.3333L2.66667 8"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Veza je kopirana u međuspremnik
    </div>
    <audio-player
      v-if="audio"
      :src="audio"
      :is-premium="isPremium"
      :has-premium="hasPremium"
      :article-id="articleId"
      :article-title="articleTitle"
      :article-author="articleAuthor"
      :article-premium="isPremium"
    ></audio-player>
    <div class="actions">
      <div v-if="showGift" ref="giftWrap" class="gift-wrap">
        <button
          class="action-button"
          @click="showGiftSubmenu = !showGiftSubmenu"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33496 4.33528V14.0853M7.33496 4.33528C7.06367 3.21733 6.59655 2.26159 5.99451 1.59266C5.39248 0.923734 4.68348 0.572683 3.95996 0.585289C3.46268 0.585289 2.98577 0.782833 2.63414 1.13446C2.28251 1.48609 2.08496 1.96301 2.08496 2.46029C2.08496 2.95757 2.28251 3.43448 2.63414 3.78611C2.98577 4.13774 3.46268 4.33529 3.95996 4.33529M7.33496 4.33528C7.60625 3.21733 8.07338 2.26159 8.67541 1.59266C9.27744 0.923734 9.98645 0.572683 10.71 0.585289C11.2072 0.585289 11.6842 0.782833 12.0358 1.13446C12.3874 1.48609 12.585 1.96301 12.585 2.46029C12.585 2.95757 12.3874 3.43448 12.0358 3.78611C11.6842 4.13774 11.2072 4.33529 10.71 4.33529M12.585 7.33528V12.5853C12.585 12.9831 12.4269 13.3646 12.1456 13.6459C11.8643 13.9272 11.4828 14.0853 11.085 14.0853H3.58496C3.18714 14.0853 2.80561 13.9272 2.5243 13.6459C2.243 13.3646 2.08496 12.9831 2.08496 12.5853V7.33528M0.584961 5.08528C0.584961 4.88637 0.663979 4.6956 0.804631 4.55495C0.945283 4.4143 1.13605 4.33528 1.33496 4.33528H13.335C13.5339 4.33528 13.7246 4.4143 13.8653 4.55495C14.0059 4.6956 14.085 4.88637 14.085 5.08528V6.58528C14.085 6.78419 14.0059 6.97496 13.8653 7.11561C13.7246 7.25626 13.5339 7.33528 13.335 7.33528H1.33496C1.13605 7.33528 0.945283 7.25626 0.804631 7.11561C0.663979 6.97496 0.584961 6.78419 0.584961 6.58528V5.08528Z"
              stroke="#343434"
              stroke-width="1.17"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>{{ giftText }}</span>
        </button>

        <div
          v-if="showGiftSubmenu"
          class="submenu-overlay"
          @click="showGiftSubmenu = false"
        ></div>

        <div v-if="showGiftSubmenu" class="gift-submenu">
          <button class="close-button" @click="showGiftSubmenu = false">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <template
            v-if="
              !$store.state.user.access ||
              $store.state.user.access?.length === 0
            "
          >
            <p class="gift-submenu-title">Samo za pretplatnike</p>
            <p class="gift-submenu-description">
              Pretplatnici Telegrama mogu besplatno pokloniti 10 članaka
              mjesečno. Pretplatite se ili prijavite u svoj račun.
            </p>
          </template>
          <template v-else-if="userGifts.available">
            <p class="gift-submenu-title">Poklonite članak</p>
            <p class="gift-submenu-description">
              Kao pretplatnik možete nekom pokloniti članke koji su zaključani.
              Imate još <b>{{ userGifts.available }}/10</b> članaka za
              podijeliti ovaj mjesec.
            </p>
            <div class="gift-item" @click="copyLink">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 15.0001L15 9.00006M11 6.00006L11.463 5.46406C12.4008 4.52639 13.6727 3.99966 14.9989 3.99976C16.325 3.99985 17.5968 4.52676 18.5345 5.46456C19.4722 6.40237 19.9989 7.67425 19.9988 9.00042C19.9987 10.3266 19.4718 11.5984 18.534 12.5361L18 13.0001M13.0001 18.0001L12.6031 18.5341C11.6544 19.4722 10.3739 19.9984 9.03964 19.9984C7.70535 19.9984 6.42489 19.4722 5.47614 18.5341C5.0085 18.0717 4.63724 17.5211 4.38385 16.9142C4.13047 16.3073 4 15.6562 4 14.9986C4 14.3409 4.13047 13.6898 4.38385 13.0829C4.63724 12.476 5.0085 11.9255 5.47614 11.4631L6.00014 11.0001"
                  stroke="#343434"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Kopiraj link
            </div>
            <div class="gift-item" @click="fbShare">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                  stroke="#343434"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Podijeli na Facebook
            </div>
            <div class="gift-item" @click="twitterShare">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 20L10.768 13.232M13.228 10.772L20 4M4 4L15.733 20H20L8.267 4H4Z"
                  stroke="#343434"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Podijeli na X (Twitter)
            </div>
            <div class="gift-item" @click="whatsappShare">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 9.99976C9 10.1324 9.05268 10.2595 9.14645 10.3533C9.24021 10.4471 9.36739 10.4998 9.5 10.4998C9.63261 10.4998 9.75979 10.4471 9.85355 10.3533C9.94732 10.2595 10 10.1324 10 9.99976V8.99976C10 8.86715 9.94732 8.73997 9.85355 8.6462C9.75979 8.55243 9.63261 8.49976 9.5 8.49976C9.36739 8.49976 9.24021 8.55243 9.14645 8.6462C9.05268 8.73997 9 8.86715 9 8.99976V9.99976ZM9 9.99976C9 11.3258 9.52678 12.5976 10.4645 13.5353C11.4021 14.473 12.6739 14.9998 14 14.9998M14 14.9998H15C15.1326 14.9998 15.2598 14.9471 15.3536 14.8533C15.4473 14.7595 15.5 14.6324 15.5 14.4998C15.5 14.3671 15.4473 14.24 15.3536 14.1462C15.2598 14.0524 15.1326 13.9998 15 13.9998H14C13.8674 13.9998 13.7402 14.0524 13.6464 14.1462C13.5527 14.24 13.5 14.3671 13.5 14.4998C13.5 14.6324 13.5527 14.7595 13.6464 14.8533C13.7402 14.9471 13.8674 14.9998 14 14.9998ZM3 20.9997L4.65 17.1997C3.38766 15.4078 2.82267 13.2168 3.06104 11.0378C3.29942 8.8589 4.32479 6.84186 5.94471 5.36525C7.56463 3.88863 9.66775 3.05394 11.8594 3.01782C14.051 2.98171 16.1805 3.74665 17.8482 5.1691C19.5159 6.59154 20.6071 8.5737 20.9172 10.7436C21.2272 12.9135 20.7347 15.1219 19.5321 16.9545C18.3295 18.7871 16.4994 20.1177 14.3854 20.6968C12.2713 21.2759 10.0186 21.0636 8.05 20.0997L3 20.9997Z"
                  stroke="#343434"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Podijeli na Whatsapp
            </div>
            <div class="gift-item" @click="viberShare">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9682 4.36138C18.4965 3.92619 16.5906 2.54255 12.3451 2.52376C12.3451 2.52376 7.33862 2.22185 4.89804 4.4605C3.53947 5.81935 3.06155 7.80765 3.01114 10.2727C2.96073 12.7378 2.89551 17.3575 7.34859 18.6101H7.35287L7.35002 20.5215C7.35002 20.5215 7.32154 21.2954 7.83107 21.4531C8.44741 21.6445 8.80913 21.0564 9.39755 20.4224C9.72053 20.0744 10.1666 19.5631 10.5026 19.1723C13.5482 19.4287 15.8905 18.8428 16.1565 18.7562C16.7714 18.5569 20.251 18.1108 20.8169 13.4917C21.4011 8.73045 20.5344 5.71881 18.9682 4.36138ZM19.4843 13.1502C19.0066 17.0072 16.1844 17.2496 15.6641 17.4165C15.4428 17.4877 13.3855 17.9995 10.7986 17.8306C10.7986 17.8306 8.87093 20.1561 8.26883 20.7608C8.17484 20.8553 8.06433 20.8935 7.99057 20.8747C7.88689 20.8493 7.85841 20.7266 7.85955 20.5471C7.86126 20.2908 7.87607 17.3709 7.87607 17.3709C4.10911 16.325 4.3287 12.3932 4.37142 10.3342C4.41414 8.27531 4.80092 6.58864 5.94987 5.45422C8.01421 3.58441 12.2668 3.86381 12.2668 3.86381C15.858 3.87948 17.5789 4.96092 17.9779 5.3232C19.3029 6.45762 19.9779 9.1722 19.4843 13.1491V13.1502Z"
                  fill="#343434"
                />
                <path
                  d="M14.0951 10.165C14.0483 9.2234 13.57 8.72887 12.6602 8.6814"
                  stroke="#343434"
                  stroke-width="0.480199"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.324 10.578C15.343 9.7008 15.0831 8.96788 14.5444 8.37926C14.0033 7.78855 13.2542 7.46329 12.293 7.39294"
                  stroke="#343434"
                  stroke-width="0.480199"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5865 11.0716C16.5749 9.54935 16.1201 8.35047 15.2219 7.47494C14.3238 6.59942 13.2069 6.15701 11.8711 6.14771"
                  stroke="#343434"
                  stroke-width="0.480199"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.7055 13.3807C12.7055 13.3807 13.043 13.4092 13.2247 13.1853L13.579 12.7396C13.7499 12.5186 14.1623 12.3776 14.5662 12.6026C14.8688 12.7752 15.1626 12.9629 15.4465 13.1648C15.7146 13.3619 16.2634 13.8199 16.2651 13.8199C16.5266 14.0406 16.5869 14.3648 16.4089 14.7065C16.4089 14.7085 16.4075 14.712 16.4075 14.7137C16.2114 15.0535 15.9625 15.36 15.6701 15.6217C15.6667 15.6234 15.6667 15.6251 15.6636 15.6268C15.4095 15.8391 15.1599 15.9597 14.9148 15.9888C14.8787 15.9951 14.842 15.9974 14.8054 15.9956C14.6973 15.9967 14.5898 15.9801 14.487 15.9466L14.479 15.935C14.1014 15.8284 13.4708 15.5618 12.4207 14.9825C11.813 14.6512 11.2344 14.2691 10.6913 13.8401C10.419 13.6253 10.1593 13.3949 9.91343 13.1503L9.88723 13.1241L9.86103 13.0979L9.83482 13.0717C9.826 13.0632 9.81745 13.0543 9.80862 13.0455C9.56399 12.7996 9.33367 12.5399 9.1188 12.2677C8.68992 11.7245 8.30776 11.1461 7.97641 10.5386C7.39709 9.48816 7.1305 8.85815 7.02398 8.47991L7.01231 8.47194C6.97892 8.36914 6.96247 8.2616 6.9636 8.15352C6.96161 8.11693 6.96381 8.08023 6.97015 8.04415C7.00072 7.7994 7.12158 7.54961 7.33272 7.2948C7.33443 7.29167 7.33614 7.29167 7.33785 7.28825C7.5994 6.99583 7.90591 6.747 8.24584 6.55115C8.24755 6.55115 8.25097 6.54944 8.25296 6.54944C8.59474 6.37143 8.91886 6.43181 9.13931 6.69184C9.14102 6.69355 9.59814 7.24239 9.79438 7.5104C9.99638 7.79457 10.184 8.08868 10.3566 8.39162C10.5816 8.7952 10.4406 9.20847 10.2196 9.37879L9.77387 9.7331C9.54887 9.91481 9.57849 10.2523 9.57849 10.2523C9.57849 10.2523 10.2387 12.751 12.7055 13.3807Z"
                  fill="#343434"
                />
              </svg>
              Podijeli na Viber
            </div>
            <div class="gift-item" @click="telegramShare">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                  stroke="#343434"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Podijeli na Telegram
            </div>
            <div class="gift-item" @click="emailShare">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7M3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7M3 7L12 13L21 7"
                  stroke="#343434"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Podijeli emailom
            </div>
          </template>
          <template v-else>
            <p class="gift-submenu-title">Nemate više poklona</p>
            <p class="gift-submenu-description">
              Nažalost potrošili ste sve poklone za ovaj mjesec.
            </p>
          </template>
        </div>
      </div>

      <button class="action-button comments-button" @click="handleComments">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.658203 3.18945V14.1582L4.0332 10.7832H11.627C12.2983 10.7832 12.9421 10.5165 13.4168 10.0418C13.8915 9.56712 14.1582 8.92328 14.1582 8.25195V3.18945C14.1582 2.51812 13.8915 1.87429 13.4168 1.39959C12.9421 0.924888 12.2983 0.658203 11.627 0.658203H3.18945C2.51812 0.658203 1.87429 0.924888 1.39959 1.39959C0.924888 1.87429 0.658203 2.51812 0.658203 3.18945Z"
            stroke="#343434"
            stroke-width="1.31625"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span>{{ commentCount }}</span>
      </button>

      <div ref="shareWrap" class="share-wrap">
        <button
          class="action-button"
          @click="showShareSubmenu = !showShareSubmenu"
        >
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.86016 0.568359V3.48503C3.06589 4.23461 1.28308 8.43461 0.568497 12.235C0.541518 12.3852 4.49433 7.88773 7.86016 7.86003V10.7767L13.6935 5.67253L7.86016 0.568359Z"
              stroke="#343434"
              stroke-width="1.1375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div
          v-if="showShareSubmenu"
          class="submenu-overlay"
          @click="showShareSubmenu = false"
        ></div>

        <div v-if="showShareSubmenu" class="share-submenu">
          <button class="close-button" @click="showShareSubmenu = false">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p class="share-submenu-title">Podijelite članak</p>
          <div class="share-item" @click="shareCopyLink">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 15.0001L15 9.00006M11 6.00006L11.463 5.46406C12.4008 4.52639 13.6727 3.99966 14.9989 3.99976C16.325 3.99985 17.5968 4.52676 18.5345 5.46456C19.4722 6.40237 19.9989 7.67425 19.9988 9.00042C19.9987 10.3266 19.4718 11.5984 18.534 12.5361L18 13.0001M13.0001 18.0001L12.6031 18.5341C11.6544 19.4722 10.3739 19.9984 9.03964 19.9984C7.70535 19.9984 6.42489 19.4722 5.47614 18.5341C5.0085 18.0717 4.63724 17.5211 4.38385 16.9142C4.13047 16.3073 4 15.6562 4 14.9986C4 14.3409 4.13047 13.6898 4.38385 13.0829C4.63724 12.476 5.0085 11.9255 5.47614 11.4631L6.00014 11.0001"
                stroke="#343434"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Kopiraj link
          </div>
          <div class="share-item" @click="shareFb">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                stroke="#343434"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Podijeli na Facebook
          </div>
          <div class="share-item" @click="shareTwitter">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 20L10.768 13.232M13.228 10.772L20 4M4 4L15.733 20H20L8.267 4H4Z"
                stroke="#343434"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Podijeli na X (Twitter)
          </div>
          <div class="share-item" @click="shareWhatsapp">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 9.99976C9 10.1324 9.05268 10.2595 9.14645 10.3533C9.24021 10.4471 9.36739 10.4998 9.5 10.4998C9.63261 10.4998 9.75979 10.4471 9.85355 10.3533C9.94732 10.2595 10 10.1324 10 9.99976V8.99976C10 8.86715 9.94732 8.73997 9.85355 8.6462C9.75979 8.55243 9.63261 8.49976 9.5 8.49976C9.36739 8.49976 9.24021 8.55243 9.14645 8.6462C9.05268 8.73997 9 8.86715 9 8.99976V9.99976ZM9 9.99976C9 11.3258 9.52678 12.5976 10.4645 13.5353C11.4021 14.473 12.6739 14.9998 14 14.9998M14 14.9998H15C15.1326 14.9998 15.2598 14.9471 15.3536 14.8533C15.4473 14.7595 15.5 14.6324 15.5 14.4998C15.5 14.3671 15.4473 14.24 15.3536 14.1462C15.2598 14.0524 15.1326 13.9998 15 13.9998H14C13.8674 13.9998 13.7402 14.0524 13.6464 14.1462C13.5527 14.24 13.5 14.3671 13.5 14.4998C13.5 14.6324 13.5527 14.7595 13.6464 14.8533C13.7402 14.9471 13.8674 14.9998 14 14.9998ZM3 20.9997L4.65 17.1997C3.38766 15.4078 2.82267 13.2168 3.06104 11.0378C3.29942 8.8589 4.32479 6.84186 5.94471 5.36525C7.56463 3.88863 9.66775 3.05394 11.8594 3.01782C14.051 2.98171 16.1805 3.74665 17.8482 5.1691C19.5159 6.59154 20.6071 8.5737 20.9172 10.7436C21.2272 12.9135 20.7347 15.1219 19.5321 16.9545C18.3295 18.7871 16.4994 20.1177 14.3854 20.6968C12.2713 21.2759 10.0186 21.0636 8.05 20.0997L3 20.9997Z"
                stroke="#343434"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Podijeli na Whatsapp
          </div>
          <div class="share-item" @click="shareViber">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9682 4.36138C18.4965 3.92619 16.5906 2.54255 12.3451 2.52376C12.3451 2.52376 7.33862 2.22185 4.89804 4.4605C3.53947 5.81935 3.06155 7.80765 3.01114 10.2727C2.96073 12.7378 2.89551 17.3575 7.34859 18.6101H7.35287L7.35002 20.5215C7.35002 20.5215 7.32154 21.2954 7.83107 21.4531C8.44741 21.6445 8.80913 21.0564 9.39755 20.4224C9.72053 20.0744 10.1666 19.5631 10.5026 19.1723C13.5482 19.4287 15.8905 18.8428 16.1565 18.7562C16.7714 18.5569 20.251 18.1108 20.8169 13.4917C21.4011 8.73045 20.5344 5.71881 18.9682 4.36138ZM19.4843 13.1502C19.0066 17.0072 16.1844 17.2496 15.6641 17.4165C15.4428 17.4877 13.3855 17.9995 10.7986 17.8306C10.7986 17.8306 8.87093 20.1561 8.26883 20.7608C8.17484 20.8553 8.06433 20.8935 7.99057 20.8747C7.88689 20.8493 7.85841 20.7266 7.85955 20.5471C7.86126 20.2908 7.87607 17.3709 7.87607 17.3709C4.10911 16.325 4.3287 12.3932 4.37142 10.3342C4.41414 8.27531 4.80092 6.58864 5.94987 5.45422C8.01421 3.58441 12.2668 3.86381 12.2668 3.86381C15.858 3.87948 17.5789 4.96092 17.9779 5.3232C19.3029 6.45762 19.9779 9.1722 19.4843 13.1491V13.1502Z"
                fill="#343434"
              />
              <path
                d="M14.0951 10.165C14.0483 9.2234 13.57 8.72887 12.6602 8.6814"
                stroke="#343434"
                stroke-width="0.480199"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.324 10.578C15.343 9.7008 15.0831 8.96788 14.5444 8.37926C14.0033 7.78855 13.2542 7.46329 12.293 7.39294"
                stroke="#343434"
                stroke-width="0.480199"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5865 11.0716C16.5749 9.54935 16.1201 8.35047 15.2219 7.47494C14.3238 6.59942 13.2069 6.15701 11.8711 6.14771"
                stroke="#343434"
                stroke-width="0.480199"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.7055 13.3807C12.7055 13.3807 13.043 13.4092 13.2247 13.1853L13.579 12.7396C13.7499 12.5186 14.1623 12.3776 14.5662 12.6026C14.8688 12.7752 15.1626 12.9629 15.4465 13.1648C15.7146 13.3619 16.2634 13.8199 16.2651 13.8199C16.5266 14.0406 16.5869 14.3648 16.4089 14.7065C16.4089 14.7085 16.4075 14.712 16.4075 14.7137C16.2114 15.0535 15.9625 15.36 15.6701 15.6217C15.6667 15.6234 15.6667 15.6251 15.6636 15.6268C15.4095 15.8391 15.1599 15.9597 14.9148 15.9888C14.8787 15.9951 14.842 15.9974 14.8054 15.9956C14.6973 15.9967 14.5898 15.9801 14.487 15.9466L14.479 15.935C14.1014 15.8284 13.4708 15.5618 12.4207 14.9825C11.813 14.6512 11.2344 14.2691 10.6913 13.8401C10.419 13.6253 10.1593 13.3949 9.91343 13.1503L9.88723 13.1241L9.86103 13.0979L9.83482 13.0717C9.826 13.0632 9.81745 13.0543 9.80862 13.0455C9.56399 12.7996 9.33367 12.5399 9.1188 12.2677C8.68992 11.7245 8.30776 11.1461 7.97641 10.5386C7.39709 9.48816 7.1305 8.85815 7.02398 8.47991L7.01231 8.47194C6.97892 8.36914 6.96247 8.2616 6.9636 8.15352C6.96161 8.11693 6.96381 8.08023 6.97015 8.04415C7.00072 7.7994 7.12158 7.54961 7.33272 7.2948C7.33443 7.29167 7.33614 7.29167 7.33785 7.28825C7.5994 6.99583 7.90591 6.747 8.24584 6.55115C8.24755 6.55115 8.25097 6.54944 8.25296 6.54944C8.59474 6.37143 8.91886 6.43181 9.13931 6.69184C9.14102 6.69355 9.59814 7.24239 9.79438 7.5104C9.99638 7.79457 10.184 8.08868 10.3566 8.39162C10.5816 8.7952 10.4406 9.20847 10.2196 9.37879L9.77387 9.7331C9.54887 9.91481 9.57849 10.2523 9.57849 10.2523C9.57849 10.2523 10.2387 12.751 12.7055 13.3807Z"
                fill="#343434"
              />
            </svg>
            Podijeli na Viber
          </div>
          <div class="share-item" @click="shareTelegram">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                stroke="#343434"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Podijeli na Telegram
          </div>
          <div class="share-item" @click="shareEmail">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7M3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7M3 7L12 13L21 7"
                stroke="#343434"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Podijeli emailom
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActionBar',
  props: {
    audio: {
      type: String,
      default: '',
    },
    giftText: {
      type: String,
      default: 'Poklonite članak',
    },
    commentCount: {
      type: Number,
      default: 0,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    paywall: {
      type: String,
      default: '',
    },
    articleId: {
      type: Number,
      default: null,
    },
    articleTitle: {
      type: String,
      default: '',
    },
    articleAuthor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      link: '',
      showGiftSubmenu: false,
      showShareSubmenu: false,
      showCopiedNotification: false,
      copiedTimeout: null,
    }
  },
  computed: {
    userGifts() {
      return this.$store.state.gifts
    },
    hasGifted() {
      return this.userGifts.articles.filter(
        (article) => article.url === this.$route.fullPath
      )
    },
    currentUrl() {
      return window.location.origin + this.$route.fullPath
    },
    hasPremium() {
      return this.$store.getters['user/hasPremium']
    },
    showGift() {
      return this.paywall === 'always' && this.$store.state.user.token
    },
    userSubscribed() {
      return this.$store.getters['user/hasPremium']
    },
  },
  mounted() {
    if (this.$store.state.user.token) {
      this.$store.dispatch('gifts/getUserGifts')
    }
    // Add click outside listener
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    // Remove click outside listener
    document.removeEventListener('click', this.handleClickOutside)
    // Clear copied notification timeout if exists
    if (this.copiedTimeout) {
      clearTimeout(this.copiedTimeout)
    }
  },
  methods: {
    buildAnalyticsEvent(eventName, additionalData = {}) {
      const baseData = {
        event: eventName,
        user_subscribed: this.userSubscribed,
        article_id: this.articleId,
        article_title: this.articleTitle,
        article_author: this.articleAuthor,
        article_premium: this.isPremium,
      }
      return { ...baseData, ...additionalData }
    },
    showCopiedMessage() {
      // Clear any existing timeout
      if (this.copiedTimeout) {
        clearTimeout(this.copiedTimeout)
      }

      this.showCopiedNotification = true

      // Auto-hide after 2 seconds
      this.copiedTimeout = setTimeout(() => {
        this.showCopiedNotification = false
        this.copiedTimeout = null
      }, 2000)
    },
    async getLink() {
      if (this.hasGifted.length) {
        this.link = this.hasGifted[0].link
        return this.link
      }
      return await this.$axios
        .$post('/pretplate/api/gift-article/', {
          url: this.$route.fullPath,
        })
        .then((res) => {
          this.link = res.link
          this.$store.commit('gifts/updateAvailable', res)
          return res.link
        })
    },
    async copyLink() {
      this.$gtm.push(
        this.buildAnalyticsEvent('gift_article', {
          gift_channel: 'copy_link',
        })
      )
      const link = await this.getLink()
      await navigator.clipboard.writeText(link)
      this.showGiftSubmenu = false
      this.showCopiedMessage()
    },
    async fbShare() {
      this.$gtm.push(
        this.buildAnalyticsEvent('gift_article', {
          gift_channel: 'facebook',
        })
      )
      const link = await this.getLink()
      /* global FB */
      FB.ui(
        {
          method: 'share',
          href: link,
        },
        function (response) {}
      )
    },
    async twitterShare() {
      this.$gtm.push(
        this.buildAnalyticsEvent('gift_article', {
          gift_channel: 'twitter',
        })
      )
      let link = await this.getLink()
      link = encodeURIComponent(link)
      const url = `https://twitter.com/intent/tweet?url=${link}&text=Ovaj Telegram članak poklon je pretplatnika i možete ga pročitati besplatno.`
      window.open(url, '_blank')
    },
    async whatsappShare() {
      this.$gtm.push(
        this.buildAnalyticsEvent('gift_article', {
          gift_channel: 'whatsapp',
        })
      )
      let link = await this.getLink()
      link = encodeURIComponent(link)
      const url = `https://api.whatsapp.com/send?text=Ovaj Telegram članak poklon je pretplatnika i možete ga pročitati besplatno. ${link}`
      window.open(url, '_blank')
    },
    async telegramShare() {
      this.$gtm.push(
        this.buildAnalyticsEvent('gift_article', {
          gift_channel: 'telegram',
        })
      )
      let link = await this.getLink()
      link = encodeURIComponent(link)
      const url = `https://t.me/share/url?url=${link}&text=Ovaj Telegram članak poklon je pretplatnika i možete ga pročitati besplatno.`
      window.open(url, '_blank')
    },
    async viberShare() {
      this.$gtm.push(
        this.buildAnalyticsEvent('gift_article', {
          gift_channel: 'viber',
        })
      )
      let link = await this.getLink()
      link = encodeURIComponent(link)
      const url = `viber://forward?text=Ovaj Telegram članak poklon je pretplatnika i možete ga pročitati besplatno. ${link}`
      window.open(url, '_blank')
    },
    async emailShare() {
      this.$gtm.push(
        this.buildAnalyticsEvent('gift_article', {
          gift_channel: 'email',
        })
      )
      let link = await this.getLink()
      link = encodeURIComponent(link)
      const url = `mailto:?subject=Ovaj Telegram članak poklon je pretplatnika i možete ga pročitati besplatno.&body=${link}`
      window.open(url, 'top')
    },
    shareCopyLink() {
      this.$gtm.push(
        this.buildAnalyticsEvent('share_article', {
          share_channel: 'copy_link',
        })
      )
      navigator.clipboard.writeText(this.currentUrl)
      this.showShareSubmenu = false
      this.showCopiedMessage()
    },
    shareFb() {
      this.$gtm.push(
        this.buildAnalyticsEvent('share_article', {
          share_channel: 'facebook',
        })
      )
      FB.ui(
        {
          method: 'share',
          href: this.currentUrl,
        },
        function (response) {}
      )
    },
    shareTwitter() {
      this.$gtm.push(
        this.buildAnalyticsEvent('share_article', {
          share_channel: 'twitter',
        })
      )
      const link = encodeURIComponent(this.currentUrl)
      const url = `https://twitter.com/intent/tweet?url=${link}`
      window.open(url, '_blank')
    },
    shareWhatsapp() {
      this.$gtm.push(
        this.buildAnalyticsEvent('share_article', {
          share_channel: 'whatsapp',
        })
      )
      const link = encodeURIComponent(this.currentUrl)
      const url = `https://api.whatsapp.com/send?text=${link}`
      window.open(url, '_blank')
    },
    shareTelegram() {
      this.$gtm.push(
        this.buildAnalyticsEvent('share_article', {
          share_channel: 'telegram',
        })
      )
      const link = encodeURIComponent(this.currentUrl)
      const url = `https://t.me/share/url?url=${link}`
      window.open(url, '_blank')
    },
    shareViber() {
      this.$gtm.push(
        this.buildAnalyticsEvent('share_article', {
          share_channel: 'viber',
        })
      )
      const link = encodeURIComponent(this.currentUrl)
      const url = `viber://forward?text=${link}`
      window.open(url, '_blank')
    },
    shareEmail() {
      this.$gtm.push(
        this.buildAnalyticsEvent('share_article', {
          share_channel: 'email',
        })
      )
      const link = encodeURIComponent(this.currentUrl)
      const url = `mailto:?body=${link}`
      window.open(url, 'top')
    },
    handleComments() {
      const coralThread = document.getElementById('coral_thread')
      if (coralThread) {
        coralThread.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      this.$emit('comments')
    },
    handleShare() {
      this.$emit('share')
    },
    handleClickOutside(event) {
      // Guard against calls after component destruction
      if (!this.$refs.giftWrap && !this.$refs.shareWrap) {
        return
      }

      // Check if click is outside gift submenu
      if (this.showGiftSubmenu) {
        const giftWrap = this.$refs.giftWrap
        if (giftWrap && !giftWrap.contains(event.target)) {
          this.showGiftSubmenu = false
        }
      }
      // Check if click is outside share submenu
      if (this.showShareSubmenu) {
        const shareWrap = this.$refs.shareWrap
        if (shareWrap && !shareWrap.contains(event.target)) {
          this.showShareSubmenu = false
        }
      }
    },
  },
}
</script>

<style scoped>
.action-bar.nonAudio {
  width: fit-content;
  padding: 0;
  margin-right: 0;
  padding: 0 !important;
  border: none !important;
}
.action-bar.nonAudio.nonComments.bottom {
  width: 100%;
}
.action-bar.nonComments .comments-button {
  display: none;
}
.action-bar {
  max-width: 710px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-radius: 8px;
  flex-wrap: wrap;
  order: 2;
  position: relative;
}

.copied-notification {
  position: absolute;

  top: 50px;
  right: 0;
  background: #343434;
  color: #fff;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  z-index: 1001;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .copied-notification {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    width: 100%;
    max-width: 100%;
    border-radius: 16px 16px 0 0;
    padding: 16px;
    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.2);
    z-index: 10003;
    white-space: normal;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.copied-notification svg {
  flex-shrink: 0;
}
.single-article-premium .action-bar {
  order: 0;
  padding: 16px 0px;
  display: flex !important;
  border-radius: 0px;
  border-top: 1px solid #c8c8c8;
}
.regular .with-audio {
  border-bottom: 1px solid #c8c8c8;
  border-radius: 0px;
  padding-bottom: 16px;
}
.main-container.single-article.single-article-premium.single-article-premium-alt
  .with-audio {
  border-bottom: none;
  border-radius: 0px;
}
@media (min-width: 768px) {
  .action-bar.nonAudio.nonComments.bottom {
    width: fit-content;
  }
}
@media (max-width: 480px) {
  .action-bar {
    order: unset;
  }
  .single-article-commentary .action-bar {
    order: 2;
  }
  .regular .with-audio {
    border-bottom: none;
    border-radius: 0px;
    padding-bottom: 0px;
  }
}
@media (max-width: 620px) {
  .action-bar {
    gap: 1rem;
  }
}
.play-icon {
  width: 20px;
  height: 20px;
}

.duration {
  color: #666;
}

.actions {
  display: flex;
  gap: 8px;
}

.action-button {
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: background 0.2s;
  line-height: 1;
}

.action-button:hover {
  background: #efded0;
}
.superone .action-button:hover,
.openspace .action-button:hover,
.pitanje-zdravlja .action-button:hover {
  background: #efefef;
}
.action-button svg {
  width: 18px;
  height: 18px;
  display: block;
  flex-shrink: 0;
}

.action-button span {
  line-height: 2px;
}

.gift-wrap {
  position: relative;
  display: inline-block;
}

.gift-submenu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 280px;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  font-family: 'Barlow', sans-serif;
  max-width: 210px;
}

@media (max-width: 480px) {
  .gift-submenu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    transform: none;
    width: 100%;
    max-width: 100%;
    border-radius: 16px 16px 0 0;
    padding: 16px;
    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.2);
    z-index: 10002;
    text-align: left;
  }
}

/* Gift submenu arrow */
.gift-submenu::after {
  content: '';
  position: absolute;
  top: -6px;
  left: 20px;
  width: 10px;
  height: 10px;
  background: #fff;
  transform: rotate(45deg);
  box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.05);
}

@media (max-width: 480px) {
  .gift-submenu::after {
    display: none;
  }
}

.gift-submenu-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
  margin: 0 0 16px 0;
  color: #000;
}

@media (max-width: 480px) {
  .gift-submenu-title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }
}

.gift-submenu-description {
  font-size: 14px;
  line-height: 1.4;
  margin: 0 0 16px 0;
  color: #000;
}

@media (max-width: 480px) {
  .gift-submenu-description {
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
  }
}

.gift-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #000;
  transition: background 0.2s;
}

@media (max-width: 480px) {
  .gift-item {
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    padding: 0;
    margin-bottom: 16px;
  }
}

.gift-item svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .gift-item svg {
    width: auto;
    height: auto;
  }
}

.share-wrap {
  position: relative;
  display: inline-block;
}

.share-submenu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 280px;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  font-family: 'Barlow', sans-serif;
  max-width: 210px;
}

@media (max-width: 480px) {
  .share-submenu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    transform: none;
    width: 100%;
    max-width: 100%;
    border-radius: 16px 16px 0 0;
    padding: 16px;
    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.2);
    z-index: 10002;
    text-align: left;
  }
}

/* Share submenu arrow */
.share-submenu::after {
  content: '';
  position: absolute;
  top: -6px;
  right: 20px;
  width: 10px;
  height: 10px;
  background: #fff;
  transform: rotate(45deg);
  box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.05);
}

@media (max-width: 480px) {
  .share-submenu::after {
    display: none;
  }
}

.share-submenu-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
  margin: 0 0 16px 0;
  color: #000;
}

@media (max-width: 480px) {
  .share-submenu-title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }
}

.share-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #000;
  transition: background 0.2s;
}

@media (max-width: 480px) {
  .share-item {
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    padding: 0;
    margin-bottom: 16px;
  }
}

.share-item svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .share-item svg {
    width: auto;
    height: auto;
  }
}

.close-button {
  display: none;
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 10;
}

.close-button svg {
  display: block;
}

@media (max-width: 480px) {
  .close-button {
    display: block;
  }
}

.submenu-overlay {
  display: none;
}

@media (max-width: 480px) {
  .submenu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10001;
  }
}

/* Dark mode styles */
body.dark-mode .gift-submenu,
body.dark-mode .share-submenu {
  background: #000;
  color: #fff;
}

body.dark-mode .gift-submenu-title,
body.dark-mode .share-submenu-title,
body.dark-mode .gift-submenu-description,
body.dark-mode .gift-item,
body.dark-mode .share-item {
  color: #fff;
}

body.dark-mode .gift-item svg path,
body.dark-mode .share-item svg path {
  stroke: #fff;
  fill: #fff;
}

body.dark-mode .gift-item svg path[fill='#343434'] {
  fill: #fff;
}

body.dark-mode .close-button svg path {
  stroke: #fff;
}

/* ActionBar dark mode styles */
body.dark-mode .action-button {
  color: #fff;
  border-color: #fff;
}

body.dark-mode .action-button svg path {
  stroke: #fff;
  fill: #fff;
}

body.dark-mode .action-button:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
