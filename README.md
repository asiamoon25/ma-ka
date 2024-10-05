# 프로젝트 아이디어

## 1. 캐릭터 프로필 대시보드
유저가 자신의 캐릭터나 다른 유저의 캐릭터 정보를 조회할 수 있는 웹 애플리케이션을 만들 수 있음.

- 사용할 API:
  - `/maplestory/v1/character/basic`
  - `/maplestory/v1/character/stat`
  - `/maplestory/v1/character/item-equipment`
  - `/maplestory/v1/character/skill`
  
캐릭터 성장 상태나 장비를 시각화해서 상세한 정보를 보여주는 대시보드를 만들면 좋을 듯.

## 2. 캐릭터 인기 및 랭킹 추적기
캐릭터들의 인기 순위나 게임 내 랭킹을 보여주는 앱을 만들 수 있음.

- 사용할 API:
  - `/maplestory/v1/character/popularity`
  - `/maplestory/v1/ranking/overall`
  - `/maplestory/v1/ranking/guild`

랭킹에 따른 캐릭터, 길드, 인기 장비 등을 비교하고 보여줄 수 있음.

## 3. 유니온 및 스킬 최적화 도구
캐릭터의 유니온 세팅이나 링크 스킬을 최적화하는 도구를 개발할 수 있음.

- 사용할 API:
  - `/maplestory/v1/user/union`
  - `/maplestory/v1/character/link-skill`
  - `/maplestory/v1/character/ability`

유니온 설정을 최적화하거나, 캐릭터에게 어떤 링크 스킬이 유용한지 추천하는 기능을 추가할 수 있음.

## 4. 아이템 및 세트 효과 분석기
플레이어가 사용하는 장비 세트와 세트 효과를 분석하는 애플리케이션을 만들 수 있음.

- 사용할 API:
  - `/maplestory/v1/character/item-equipment`
  - `/maplestory/v1/character/set-effect`

현재 착용한 장비를 분석해서 세트 효과를 더 잘 활용할 방법을 제시하는 기능을 추가할 수 있음.

## 5. 큐브 및 잠재능력 기록 추적기
큐브나 잠재능력 재설정 기록을 추적하는 도구를 만들 수 있음.

- 사용할 API:
  - `/maplestory/v1/history/cube`
  - `/maplestory/v1/history/potential`

큐브 사용 내역이나 잠재능력 변경 내역을 시각적으로 보여주고, 이를 바탕으로 분석하는 기능을 추가할 수 있음.
