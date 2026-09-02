<template>
  <div style="height: 100%">
    <xr-ef-form @ready="efFormReady" :f2-do="f2Do">
      <div
        class="card-header"
        style="
          height: 100%;
          width: 100%;
          overflow: auto;
          border: 0.05px solid;
          border-color: rgb(0 0 0 / 10%);
        "
      >
        <div style="display: flex; height: 165px; width: 1800px">
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                1#铁水倒灌站
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H1[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H1[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_H1[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H1[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H1[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H1[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H1[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H1[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                class="H1_B"
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              ></div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_H1_CF">
                    <div style="text-align: center">
                      {{ bunker_H1_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_H1_CF_act">
                    <div style="text-align: center">
                      {{ bunker_H1_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                2#铁水倒灌站
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H2[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H2[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_H2[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H2[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H2[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H2[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H2[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_H2[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                class="H1_B"
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              ></div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_H2_CF">
                    <div style="text-align: center">
                      {{ bunker_H2_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_H2_CF_act">
                    <div style="text-align: center">
                      {{ bunker_H2_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                1#铁水脱硫站
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T1[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T1[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_T1[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T1[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T1[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T1[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T1[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T1[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                class="T1_B"
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              ></div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_T1_CF">
                    <div style="text-align: center">
                      {{ bunker_T1_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_T1_CF_act">
                    <div style="text-align: center">
                      {{ bunker_T1_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                2#铁水脱硫站
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T2[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T2[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_T2[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T2[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T2[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T2[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T2[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T2[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                class="T1_B"
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              ></div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_T2_CF">
                    <div style="text-align: center">
                      {{ bunker_T2_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_T2_CF_act">
                    <div style="text-align: center">
                      {{ bunker_T2_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                3#铁水脱硫站
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T3[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T3[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_T3[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T3[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T3[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T3[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T3[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_T3[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                class="T1_B"
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              ></div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_T3_CF">
                    <div style="text-align: center">
                      {{ bunker_T3_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_T3_CF_act">
                    <div style="text-align: center">
                      {{ bunker_T3_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 30px; width: 100%"></div>
        <div style="display: flex; height: 165px; width: 1800px">
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                1#转炉
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B1[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B1[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_B1[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B1[3] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B1[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B1[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B1[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B1[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B1[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B1[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="
                    bunker_B1[8] === '1' ||
                    bunker_B1[8] === '3' ||
                    bunker_B1[8] === '5' ||
                    bunker_B1[8] === '6'
                  "
                >
                  <div class="BOF_1" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="BOF_2" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_B1_CF">
                    <div style="text-align: center">
                      {{ bunker_B1_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_B1_CF_act">
                    <div style="text-align: center">
                      {{ bunker_B1_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                2#转炉
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B2[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B2[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_B2[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B2[3] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B2[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B2[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B2[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B2[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B2[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B2[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="
                    bunker_B2[8] === '1' ||
                    bunker_B2[8] === '3' ||
                    bunker_B2[8] === '5' ||
                    bunker_B2[8] === '6'
                  "
                >
                  <div class="BOF_1" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="BOF_2" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_B2_CF">
                    <div style="text-align: center">
                      {{ bunker_B2_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_B2_CF_act">
                    <div style="text-align: center">
                      {{ bunker_B2_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                0#转炉
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B0[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B0[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_B0[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B0[3] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B0[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B0[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B0[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B0[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B0[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_B0[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="
                    bunker_B0[8] === '1' ||
                    bunker_B0[8] === '3' ||
                    bunker_B0[8] === '5' ||
                    bunker_B0[8] === '6'
                  "
                >
                  <div class="BOF_1" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="BOF_2" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_B0_CF">
                    <div style="text-align: center">
                      {{ bunker_B0_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_B0_CF_act">
                    <div style="text-align: center">
                      {{ bunker_B0_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 50px; width: 100%"></div>
        <div style="display: flex; height: 165px; width: 2200px">
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                2#LF炉1#位
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L3[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L3[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_L3[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L3[3] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L3[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L3[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L3[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L3[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L3[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L3[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="bunker_L3[8] === '1' || bunker_L3[8] === '3'"
                >
                  <div class="LF_1" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="LF_2" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_L3_CF">
                    <div style="text-align: center">
                      {{ bunker_L3_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_L3_CF_act">
                    <div style="text-align: center">
                      {{ bunker_L3_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                2#LF炉2#位
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L4[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L4[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_L4[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L4[3] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L4[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L4[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L4[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L4[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L4[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L4[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="bunker_L4[8] === '1' || bunker_L4[8] === '3'"
                >
                  <div class="LF_1" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="LF_2" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_L4_CF">
                    <div style="text-align: center">
                      {{ bunker_L4_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_L4_CF_act">
                    <div style="text-align: center">
                      {{ bunker_L4_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                3#LF炉1#位
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L5[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L5[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_L5[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L5[3] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L5[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L5[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L5[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L5[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L5[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L5[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="bunker_L5[8] === '1' || bunker_L5[8] === '3'"
                >
                  <div class="LF_1" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="LF_2" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_L5_CF">
                    <div style="text-align: center">
                      {{ bunker_L5_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_L5_CF_act">
                    <div style="text-align: center">
                      {{ bunker_L5_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                3#LF炉2#位
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L6[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L6[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_L6[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L6[3] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L6[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L6[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L6[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L6[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L6[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_L6[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="bunker_L6[8] === '1' || bunker_L6[8] === '3'"
                >
                  <div class="LF_1" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="LF_2" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_L6_CF">
                    <div style="text-align: center">
                      {{ bunker_L6_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_L6_CF_act">
                    <div style="text-align: center">
                      {{ bunker_L6_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                1#RH1#位
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R1[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R1[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_R1[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R1[3] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R1[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R1[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R1[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R1[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R1[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R1[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="bunker_R1[8] === '1' || bunker_R1[8] === '3'"
                >
                  <div class="RH_2" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="RH_1" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_R1_CF">
                    <div style="text-align: center">
                      {{ bunker_R1_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_R1_CF_act">
                    <div style="text-align: center">
                      {{ bunker_R1_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                1#RH2#位
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R2[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R2[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_R2[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R2[3] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R2[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R2[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R2[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R2[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R2[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R2[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="bunker_R2[8] === '1' || bunker_R2[8] === '3'"
                >
                  <div class="RH_2" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="RH_1" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_R2_CF">
                    <div style="text-align: center">
                      {{ bunker_R2_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_R2_CF_act">
                    <div style="text-align: center">
                      {{ bunker_R2_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                2#RH1#位
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R3[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R3[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_R3[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R3[3] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R3[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R3[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R3[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R3[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R3[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R3[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="bunker_R3[8] === '1' || bunker_R3[8] === '3'"
                >
                  <div class="RH_2" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="RH_1" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_R3_CF">
                    <div style="text-align: center">
                      {{ bunker_R3_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_R3_CF_act">
                    <div style="text-align: center">
                      {{ bunker_R3_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 250px; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                2#RH2#位
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R4[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R4[1] }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
                text-align: center;
                font-weight: bold;
              "
            >
              {{ bunker_R4[2] }}
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R4[3] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R4[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R4[5] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 50%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R4[6] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R4[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R4[7] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_R4[8] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
            </div>
            <div style="display: flex; height: 500%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 25%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="bunker_R4[8] === '1' || bunker_R4[8] === '3'"
                >
                  <div class="RH_2" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="RH_1" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 75%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_R4_CF">
                    <div style="text-align: center">
                      {{ bunker_R4_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_R4_CF_act">
                    <div style="text-align: center">
                      {{ bunker_R4_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 50px; width: 100%"></div>
        <div style="display: flex; height: 165px; width: 1500px">
          <div style="height: 10%; width: 20%; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                3#连铸机
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C3[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C3[1] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 44%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C3[3] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              ></div>
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C3[2] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 44%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C3[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              ></div>
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C3[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 44%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C3[5] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 19%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              ></div>
              <div
                style="
                  height: 100%;
                  width: 37%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 44%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C3[6] }}
              </div>
            </div>
            <div style="display: flex; height: 600%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 19%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="
                    bunker_C3[8] == 3 ||
                    bunker_C3[8] == 6 ||
                    bunker_C3[8] == 7 ||
                    bunker_C3[8] == 8
                  "
                >
                  <div class="C_OPEN" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="C_CUT" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 37%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_C3_CF">
                    <div style="text-align: center">
                      {{ bunker_C3_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_C3_CF_act">
                    <div style="text-align: center">
                      {{ bunker_C3_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 44%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="
                    height: 15%;
                    width: 100%;
                    background: rgb(229 255 228);
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  {{ bunker_C3[7] }}
                </div>
                <div
                  style="
                    height: 15%;
                    width: 100%;
                    background: rgb(229 255 228);
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  {{ bunker_C3[10] }}
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 20%; margin-right: 10px">
            <div
              style="
                height: 120%;
                width: 100%;
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            >
              <div
                style="
                  color: rgb(0 23 55);
                  margin-left: 5px;
                  height: 100%;
                  width: 100%;
                  font-weight: bold;
                  font-size: 1pc;
                "
              >
                4#连铸机
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C4[0] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C4[1] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 44%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C4[3] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              ></div>
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C4[2] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 44%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C4[4] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              ></div>
              <div
                style="
                  height: 100%;
                  width: 28%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C4[9] }}
              </div>
              <div
                style="
                  height: 100%;
                  width: 44%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C4[5] }}
              </div>
            </div>
            <div style="display: flex; height: 100%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 19%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              ></div>
              <div
                style="
                  height: 100%;
                  width: 37%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                "
              >
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  成分
                </div>
                <div
                  style="
                    height: 100%;
                    width: 50%;
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  值(%)
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 44%;
                  background: rgb(229 255 228);
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  text-align: center;
                  font-weight: bold;
                "
              >
                {{ bunker_C4[6] }}
              </div>
            </div>
            <div style="display: flex; height: 600%; width: 100%">
              <div
                style="
                  height: 100%;
                  width: 19%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="height: 100%; width: 100%"
                  v-if="
                    bunker_C4[8] == 3 ||
                    bunker_C4[8] == 6 ||
                    bunker_C4[8] == 7 ||
                    bunker_C4[8] == 8
                  "
                >
                  <div class="C_OPEN" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="C_CUT" style="height: 100%; width: 100%"></div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 37%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                  display: flex;
                  overflow: auto;
                "
              >
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_C4_CF">
                    <div style="text-align: center">
                      {{ bunker_C4_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_C4_CF_act">
                    <div style="text-align: center">
                      {{ bunker_C4_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style="
                  height: 100%;
                  width: 44%;
                  border: 0.05px solid;
                  border-color: rgb(0 0 0 / 10%);
                "
              >
                <div
                  style="
                    height: 15%;
                    width: 100%;
                    background: rgb(229 255 228);
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  {{ bunker_C4[7] }}
                </div>
                <div
                  style="
                    height: 15%;
                    width: 100%;
                    background: rgb(229 255 228);
                    border: 0.05px solid;
                    border-color: rgb(0 0 0 / 10%);
                    text-align: center;
                    font-weight: bold;
                  "
                >
                  {{ bunker_C4[10] }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./PSSM33CVS2N.ts"></script>

<style lang="scss">
@import "./PSSM33CVS2N.scss";
</style>
