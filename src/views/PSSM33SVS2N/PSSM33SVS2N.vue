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
        <div style="display: flex; height: 165px; width: 2500px">
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
                1#合金熔化炉
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
                {{ bunker_Z1[0] }}
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
                {{ bunker_Z1[1] }}
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
              {{ bunker_Z1[2] }}
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
                {{ bunker_Z1[5] }}
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
                {{ bunker_Z1[6] }}
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
                {{ bunker_Z1[9] }}
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
                {{ bunker_Z1[7] }}
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
                {{ bunker_Z1[8] }}
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
                <div style="height: 100%; width: 100%" v-if="bunker_Z1[10] == 1">
                  <div style="height: 100%; width: 100%; background: rgb(255 0 68)"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%"
                    v-if="bunker_Z1[8] == 3 || bunker_Z1[8] == 1"
                  >
                    <div
                      style="height: 100%; width: 100%; background: rgb(229 255 228)"
                    ></div>
                  </div>
                  <div style="height: 100%; width: 100%" v-else>
                    <div
                      style="height: 100%; width: 100%; background: rgb(0 0 0 / 42%)"
                    ></div>
                  </div>
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
                  <div v-for="(item, index) in bunker_Z1_CF">
                    <div style="text-align: center">
                      {{ bunker_Z1_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_Z1_CF_act">
                    <div style="text-align: center">
                      {{ bunker_Z1_CF_act[index] }}
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
                2#合金熔化炉
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
                {{ bunker_Z2[0] }}
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
                {{ bunker_Z2[1] }}
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
              {{ bunker_Z2[2] }}
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
                {{ bunker_Z2[5] }}
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
                {{ bunker_Z2[6] }}
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
                {{ bunker_Z2[9] }}
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
                {{ bunker_Z2[7] }}
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
                {{ bunker_Z2[8] }}
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
                <div style="height: 100%; width: 100%" v-if="bunker_Z2[10] == 1">
                  <div style="height: 100%; width: 100%; background: rgb(255 0 68)"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%"
                    v-if="bunker_Z2[8] == 3 || bunker_Z2[8] == 1"
                  >
                    <div
                      style="height: 100%; width: 100%; background: rgb(229 255 228)"
                    ></div>
                  </div>
                  <div style="height: 100%; width: 100%" v-else>
                    <div
                      style="height: 100%; width: 100%; background: rgb(0 0 0 / 42%)"
                    ></div>
                  </div>
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
                  <div v-for="(item, index) in bunker_Z2_CF">
                    <div style="text-align: center">
                      {{ bunker_Z2_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_Z2_CF_act">
                    <div style="text-align: center">
                      {{ bunker_Z2_CF_act[index] }}
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
                3#合金熔化炉
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
                {{ bunker_Z3[0] }}
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
                {{ bunker_Z3[1] }}
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
              {{ bunker_Z3[2] }}
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
                {{ bunker_Z3[5] }}
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
                {{ bunker_Z3[6] }}
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
                {{ bunker_Z3[9] }}
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
                {{ bunker_Z3[7] }}
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
                {{ bunker_Z3[8] }}
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
                <div style="height: 100%; width: 100%" v-if="bunker_Z3[10] == 1">
                  <div style="height: 100%; width: 100%; background: rgb(255 0 68)"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%"
                    v-if="bunker_Z3[8] == 3 || bunker_Z3[8] == 1"
                  >
                    <div
                      style="height: 100%; width: 100%; background: rgb(229 255 228)"
                    ></div>
                  </div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%; background: rgb(0 0 0 / 42%)"
                  ></div>
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
                  <div v-for="(item, index) in bunker_Z3_CF">
                    <div style="text-align: center">
                      {{ bunker_Z3_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_Z3_CF_act">
                    <div style="text-align: center">
                      {{ bunker_Z3_CF_act[index] }}
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
                4#合金熔化炉
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
                {{ bunker_Z4[0] }}
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
                {{ bunker_Z4[1] }}
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
              {{ bunker_Z4[2] }}
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
                {{ bunker_Z4[5] }}
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
                {{ bunker_Z4[6] }}
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
                {{ bunker_Z4[9] }}
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
                {{ bunker_Z4[7] }}
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
                {{ bunker_Z4[8] }}
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
                <div style="height: 100%; width: 100%" v-if="bunker_Z4[10] == 1">
                  <div style="height: 100%; width: 100%; background: rgb(255 0 68)"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%"
                    v-if="bunker_Z4[8] == 3 || bunker_Z4[8] == 1"
                  >
                    <div
                      style="height: 100%; width: 100%; background: rgb(229 255 228)"
                    ></div>
                  </div>
                  <div style="height: 100%; width: 100%" v-else>
                    <div
                      style="height: 100%; width: 100%; background: rgb(0 0 0 / 42%)"
                    ></div>
                  </div>
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
                  <div v-for="(item, index) in bunker_Z4_CF">
                    <div style="text-align: center">
                      {{ bunker_Z4_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_Z4_CF_act">
                    <div style="text-align: center">
                      {{ bunker_Z4_CF_act[index] }}
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
                5#合金熔化炉
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
                {{ bunker_Z5[0] }}
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
                {{ bunker_Z5[1] }}
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
              {{ bunker_Z5[2] }}
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
                {{ bunker_Z5[5] }}
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
                {{ bunker_Z5[6] }}
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
                {{ bunker_Z5[9] }}
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
                {{ bunker_Z5[7] }}
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
                {{ bunker_Z5[8] }}
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
                <div style="height: 100%; width: 100%" v-if="bunker_Z5[10] == 1">
                  <div style="height: 100%; width: 100%; background: rgb(255 0 68)"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%"
                    v-if="bunker_Z5[8] == 3 || bunker_Z5[8] == 1"
                  >
                    <div
                      style="height: 100%; width: 100%; background: rgb(229 255 228)"
                    ></div>
                  </div>
                  <div style="height: 100%; width: 100%" v-else>
                    <div
                      style="height: 100%; width: 100%; background: rgb(0 0 0 / 42%)"
                    ></div>
                  </div>
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
                  <div v-for="(item, index) in bunker_Z5_CF">
                    <div style="text-align: center">
                      {{ bunker_Z5_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_Z5_CF_act">
                    <div style="text-align: center">
                      {{ bunker_Z5_CF_act[index] }}
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
                6#合金熔化炉
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
                {{ bunker_Z6[0] }}
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
                {{ bunker_Z6[1] }}
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
              {{ bunker_Z6[2] }}
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
                {{ bunker_Z6[5] }}
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
                {{ bunker_Z6[6] }}
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
                {{ bunker_Z6[9] }}
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
                {{ bunker_Z6[7] }}
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
                {{ bunker_Z6[8] }}
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
                <div style="height: 100%; width: 100%" v-if="bunker_Z6[10] == 1">
                  <div style="height: 100%; width: 100%; background: rgb(255 0 68)"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%"
                    v-if="bunker_Z6[8] == 3 || bunker_Z6[8] == 1"
                  >
                    <div
                      style="height: 100%; width: 100%; background: rgb(229 255 228)"
                    ></div>
                  </div>
                  <div style="height: 100%; width: 100%" v-else>
                    <div
                      style="height: 100%; width: 100%; background: rgb(0 0 0 / 42%)"
                    ></div>
                  </div>
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
                  <div v-for="(item, index) in bunker_Z6_CF">
                    <div style="text-align: center">
                      {{ bunker_Z6_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_Z6_CF_act">
                    <div style="text-align: center">
                      {{ bunker_Z6_CF_act[index] }}
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
                7#合金熔化炉
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
                {{ bunker_Z7[0] }}
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
                {{ bunker_Z7[1] }}
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
              {{ bunker_Z7[2] }}
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
                {{ bunker_Z7[5] }}
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
                {{ bunker_Z7[6] }}
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
                {{ bunker_Z7[9] }}
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
                {{ bunker_Z7[7] }}
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
                {{ bunker_Z7[8] }}
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
                <div style="height: 100%; width: 100%" v-if="bunker_Z7[10] == 1">
                  <div style="height: 100%; width: 100%; background: rgb(255 0 68)"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%"
                    v-if="bunker_Z7[8] == 3 || bunker_Z7[8] == 1"
                  >
                    <div
                      style="height: 100%; width: 100%; background: rgb(229 255 228)"
                    ></div>
                  </div>
                  <div style="height: 100%; width: 100%" v-else>
                    <div
                      style="height: 100%; width: 100%; background: rgb(0 0 0 / 42%)"
                    ></div>
                  </div>
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
                  <div v-for="(item, index) in bunker_Z7_CF">
                    <div style="text-align: center">
                      {{ bunker_Z7_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_Z7_CF_act">
                    <div style="text-align: center">
                      {{ bunker_Z7_CF_act[index] }}
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
                8#合金熔化炉
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
                {{ bunker_Z8[0] }}
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
                {{ bunker_Z8[1] }}
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
              {{ bunker_Z7[2] }}
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
                {{ bunker_Z8[5] }}
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
                {{ bunker_Z8[6] }}
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
                {{ bunker_Z8[9] }}
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
                {{ bunker_Z8[7] }}
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
                {{ bunker_Z8[8] }}
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
                <div style="height: 100%; width: 100%" v-if="bunker_Z8[10] == 1">
                  <div style="height: 100%; width: 100%; background: rgb(255 0 68)"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%"
                    v-if="bunker_Z8[8] == 3 || bunker_Z8[8] == 1"
                  >
                    <div
                      style="height: 100%; width: 100%; background: rgb(229 255 228)"
                    ></div>
                  </div>
                  <div style="height: 100%; width: 100%" v-else>
                    <div
                      style="height: 100%; width: 100%; background: rgb(0 0 0 / 42%)"
                    ></div>
                  </div>
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
                  <div v-for="(item, index) in bunker_Z8_CF">
                    <div style="text-align: center">
                      {{ bunker_Z8_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_Z8_CF_act">
                    <div style="text-align: center">
                      {{ bunker_Z8_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 30px; width: 100%"></div>
        <div style="display: flex; height: 165px; width: 1900px">
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
                1#电炉
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
                {{ bunker_E1[0] }}
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
                {{ bunker_E1[1] }}
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
              {{ bunker_E1[2] }}
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            ></div>
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
                {{ bunker_E1[3] }}
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
                {{ bunker_E1[4] }}
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
                {{ bunker_E1[5] }}
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
                {{ bunker_E1[6] }}
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
                {{ bunker_E1[9] }}
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
                {{ bunker_E1[7] }}
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
                {{ bunker_E1[8] }}
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
                    bunker_E1[8] === '1' ||
                    bunker_E1[8] === '3' ||
                    bunker_E1[8] === '5' ||
                    bunker_E1[8] === '6'
                  "
                >
                  <div class="E1_B" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="E2_B" style="height: 100%; width: 100%"></div>
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
                  <div v-for="(item, index) in bunker_E1_CF">
                    <div style="text-align: center">
                      {{ bunker_E1_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_E1_CF_act">
                    <div style="text-align: center">
                      {{ bunker_E1_CF_act[index] }}
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
                2#电炉
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
                {{ bunker_E2[0] }}
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
                {{ bunker_E2[1] }}
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
              {{ bunker_E2[2] }}
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            ></div>
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
                {{ bunker_E2[3] }}
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
                {{ bunker_E2[4] }}
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
                {{ bunker_E2[5] }}
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
                {{ bunker_E2[6] }}
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
                {{ bunker_E2[9] }}
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
                {{ bunker_E2[7] }}
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
                {{ bunker_E2[8] }}
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
                    bunker_E2[8] === '1' ||
                    bunker_E2[8] === '3' ||
                    bunker_E2[8] === '5' ||
                    bunker_E2[8] === '6'
                  "
                >
                  <div class="E1_B" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div class="E2_B" style="height: 100%; width: 100%"></div>
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
                  <div v-for="(item, index) in bunker_E2_CF">
                    <div style="text-align: center">
                      {{ bunker_E2_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_E2_CF_act">
                    <div style="text-align: center">
                      {{ bunker_E2_CF_act[index] }}
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
                0#AOD炉
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
                {{ bunker_A0[0] }}
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
                {{ bunker_A0[1] }}
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
              {{ bunker_A0[2] }}
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            ></div>
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
                {{ bunker_A0[3] }}
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
                {{ bunker_A0[4] }}
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
                {{ bunker_A0[5] }}
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
                {{ bunker_A0[6] }}
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
                {{ bunker_A0[9] }}
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
                {{ bunker_A0[7] }}
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
                {{ bunker_A0[8] }}
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
                    bunker_A0[8] == 3 ||
                    bunker_A0[8] == 1 ||
                    bunker_A0[8] == 5 ||
                    bunker_A0[8] == 6
                  "
                >
                  <div class="AOD_1" style="height: 100%; width: 100"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%; background: rgb(0 0 0 / 42%)"
                  ></div>
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
                  <div v-for="(item, index) in bunker_A0_CF">
                    <div style="text-align: center">
                      {{ bunker_A0_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_A0_CF_act">
                    <div style="text-align: center">
                      {{ bunker_A0_CF_act[index] }}
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
                1#AOD炉
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
                {{ bunker_A1[0] }}
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
                {{ bunker_A1[1] }}
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
              {{ bunker_A1[2] }}
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            ></div>
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
                {{ bunker_A1[3] }}
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
                {{ bunker_A1[4] }}
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
                {{ bunker_A1[5] }}
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
                {{ bunker_A1[6] }}
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
                {{ bunker_A1[9] }}
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
                {{ bunker_A1[7] }}
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
                {{ bunker_A1[8] }}
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
                    bunker_A1[8] == 3 ||
                    bunker_A1[8] == 1 ||
                    bunker_A1[8] == 5 ||
                    bunker_A1[8] == 6
                  "
                >
                  <div class="AOD_1" style="height: 100%; width: 100%"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%; background: rgb(0 0 0 / 42%)"
                  ></div>
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
                  <div v-for="(item, index) in bunker_A1_CF">
                    <div style="text-align: center">
                      {{ bunker_A1_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_A1_CF_act">
                    <div style="text-align: center">
                      {{ bunker_A1_CF_act[index] }}
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
                2#AOD炉
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
                {{ bunker_A2[0] }}
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
                {{ bunker_A2[1] }}
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
              {{ bunker_A2[2] }}
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            ></div>
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
                {{ bunker_A2[3] }}
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
                {{ bunker_A2[4] }}
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
                {{ bunker_A2[5] }}
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
                {{ bunker_A2[6] }}
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
                {{ bunker_A2[9] }}
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
                {{ bunker_A2[7] }}
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
                {{ bunker_A2[8] }}
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
                    bunker_A2[8] == 3 ||
                    bunker_A2[8] == 1 ||
                    bunker_A2[8] == 5 ||
                    bunker_A2[8] == 6
                  "
                >
                  <div class="AOD_1" style="height: 100%; width: 100"></div>
                </div>
                <div style="height: 100%; width: 100%" v-else>
                  <div
                    style="height: 100%; width: 100%; background: rgb(0 0 0 / 42%)"
                  ></div>
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
                  <div v-for="(item, index) in bunker_A2_CF">
                    <div style="text-align: center">
                      {{ bunker_A2_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_A2_CF_act">
                    <div style="text-align: center">
                      {{ bunker_A2_CF_act[index] }}
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
                1#VOD炉1#位
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
                {{ bunker_V1[0] }}
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
                {{ bunker_V1[1] }}
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
              {{ bunker_V1[2] }}
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            ></div>
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
                {{ bunker_V1[3] }}
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
                {{ bunker_V1[4] }}
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
                {{ bunker_V1[5] }}
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
                {{ bunker_V1[6] }}
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
                {{ bunker_V1[9] }}
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
                {{ bunker_V1[7] }}
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
                {{ bunker_V1[8] }}
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
                class="VOD"
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
                  <div v-for="(item, index) in bunker_V1_CF">
                    <div style="text-align: center">
                      {{ bunker_V1_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_V1_CF_act">
                    <div style="text-align: center">
                      {{ bunker_V1_CF_act[index] }}
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
                1#VOD炉2#位
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
                {{ bunker_V2[0] }}
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
                {{ bunker_V2[1] }}
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
              {{ bunker_V2[2] }}
            </div>
            <div
              style="
                height: 100%;
                width: 100%;
                background: rgb(229 255 228);
                border: 0.05px solid;
                border-color: rgb(0 0 0 / 10%);
              "
            ></div>
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
                {{ bunker_V2[3] }}
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
                {{ bunker_V2[4] }}
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
                {{ bunker_V2[5] }}
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
                {{ bunker_V2[6] }}
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
                {{ bunker_V2[9] }}
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
                {{ bunker_V2[7] }}
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
                {{ bunker_V2[8] }}
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
                class="VOD"
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
                  <div v-for="(item, index) in bunker_V2_CF">
                    <div style="text-align: center">
                      {{ bunker_V2_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_V2_CF_act">
                    <div style="text-align: center">
                      {{ bunker_V2_CF_act[index] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 65px; width: 100%"></div>
        <div style="display: flex; height: 165px; width: 1900px">
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
                1#LF炉1#位
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
                {{ bunker_L1[0] }}
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
                {{ bunker_L1[1] }}
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
              {{ bunker_L1[2] }}
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
                {{ bunker_L1[3] }}
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
                {{ bunker_L1[4] }}
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
                {{ bunker_L1[5] }}
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
                {{ bunker_L1[6] }}
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
                {{ bunker_L1[9] }}
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
                {{ bunker_L1[7] }}
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
                {{ bunker_L1[8] }}
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
                  v-if="bunker_L1[8] === '1' || bunker_L1[8] === '3'"
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
                  <div v-for="(item, index) in bunker_L1_CF">
                    <div style="text-align: center">
                      {{ bunker_L1_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_L1_CF_act">
                    <div style="text-align: center">
                      {{ bunker_L1_CF_act[index] }}
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
                1#LF炉2#位
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
                {{ bunker_L2[0] }}
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
                {{ bunker_L2[1] }}
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
              {{ bunker_L2[2] }}
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
                {{ bunker_L2[3] }}
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
                {{ bunker_L2[4] }}
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
                {{ bunker_L2[5] }}
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
                {{ bunker_L2[6] }}
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
                {{ bunker_L2[9] }}
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
                {{ bunker_L2[7] }}
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
                {{ bunker_L2[8] }}
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
                  v-if="bunker_L2[8] === '1' || bunker_L2[8] === '3'"
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
                  <div v-for="(item, index) in bunker_L2_CF">
                    <div style="text-align: center">
                      {{ bunker_L2_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_L2_CF_act">
                    <div style="text-align: center">
                      {{ bunker_L2_CF_act[index] }}
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
                1#LTS
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
                {{ bunker_S1[0] }}
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
                {{ bunker_S1[1] }}
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
              {{ bunker_S1[2] }}
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
                {{ bunker_S1[3] }}
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
                {{ bunker_S1[4] }}
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
                {{ bunker_S1[5] }}
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
                {{ bunker_S1[6] }}
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
                {{ bunker_S1[9] }}
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
                {{ bunker_S1[7] }}
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
                {{ bunker_S1[8] }}
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
                  background: rgb(229 255 228);
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
                  <div v-for="(item, index) in bunker_S1_CF">
                    <div style="text-align: center">
                      {{ bunker_S1_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_S1_CF_act">
                    <div style="text-align: center">
                      {{ bunker_S1_CF_act[index] }}
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
                2#LTS
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
                {{ bunker_S2[0] }}
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
                {{ bunker_S2[1] }}
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
              {{ bunker_S2[2] }}
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
                {{ bunker_S2[3] }}
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
                {{ bunker_S2[4] }}
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
                {{ bunker_S2[5] }}
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
                {{ bunker_S2[6] }}
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
                {{ bunker_S2[9] }}
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
                {{ bunker_S2[7] }}
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
                {{ bunker_S2[8] }}
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
                  background: rgb(229 255 228);
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
                  <div v-for="(item, index) in bunker_S2_CF">
                    <div style="text-align: center">
                      {{ bunker_S2_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_S2_CF_act">
                    <div style="text-align: center">
                      {{ bunker_S2_CF_act[index] }}
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
                3#LTS
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
                {{ bunker_S3[0] }}
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
                {{ bunker_S3[1] }}
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
              {{ bunker_S3[2] }}
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
                {{ bunker_S3[3] }}
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
                {{ bunker_S3[4] }}
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
                {{ bunker_S3[5] }}
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
                {{ bunker_S3[6] }}
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
                {{ bunker_S3[9] }}
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
                {{ bunker_S3[7] }}
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
                {{ bunker_S3[8] }}
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
                  background: rgb(229 255 228);
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
                  <div v-for="(item, index) in bunker_S3_CF">
                    <div style="text-align: center">
                      {{ bunker_S3_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_S3_CF_act">
                    <div style="text-align: center">
                      {{ bunker_S3_CF_act[index] }}
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
                0#连铸机
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
                {{ bunker_C0[0] }}
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
                {{ bunker_C0[1] }}
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
                {{ bunker_C0[3] }}
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
                {{ bunker_C0[2] }}
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
                {{ bunker_C0[4] }}
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
                {{ bunker_C0[9] }}
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
                {{ bunker_C0[5] }}
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
                  font-weight: bold;
                "
              >
                {{ bunker_C0[6] }}
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
                    bunker_C0[8] == 3 ||
                    bunker_C0[8] == 6 ||
                    bunker_C0[8] == 7 ||
                    bunker_C0[8] == 8
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
                  <div v-for="(item, index) in bunker_C0_CF">
                    <div style="text-align: center">
                      {{ bunker_C0_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_C0_CF_act">
                    <div style="text-align: center">
                      {{ bunker_C0_CF_act[index] }}
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
                  {{ bunker_C0[7] }}
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
                  {{ bunker_C0[10] }}
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
                1#连铸机
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
                {{ bunker_C1[0] }}
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
                {{ bunker_C1[1] }}
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
                {{ bunker_C1[3] }}
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
                {{ bunker_C1[2] }}
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
                {{ bunker_C1[4] }}
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
                {{ bunker_C1[9] }}
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
                {{ bunker_C1[5] }}
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
                {{ bunker_C1[6] }}
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
                    bunker_C1[8] == 3 ||
                    bunker_C1[8] == 6 ||
                    bunker_C1[8] == 7 ||
                    bunker_C1[8] == 8
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
                  <div v-for="(item, index) in bunker_C1_CF">
                    <div style="text-align: center">
                      {{ bunker_C1_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_C1_CF_act">
                    <div style="text-align: center">
                      {{ bunker_C1_CF_act[index] }}
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
                  {{ bunker_C1[7] }}
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
                  {{ bunker_C1[10] }}
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10%; width: 20%">
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
                2#连铸机
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
                {{ bunker_C2[0] }}
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
                {{ bunker_C2[1] }}
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
                {{ bunker_C2[3] }}
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
                {{ bunker_C2[2] }}
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
                {{ bunker_C2[4] }}
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
                {{ bunker_C2[9] }}
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
                {{ bunker_C2[5] }}
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
                {{ bunker_C2[6] }}
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
                    bunker_C2[8] == 3 ||
                    bunker_C2[8] == 6 ||
                    bunker_C2[8] == 7 ||
                    bunker_C2[8] == 8
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
                  <div v-for="(item, index) in bunker_C2_CF">
                    <div style="text-align: center">
                      {{ bunker_C2_CF[index] }}
                    </div>
                  </div>
                </div>
                <div style="width: 50%; height: 100%">
                  <div v-for="(item, index) in bunker_C2_CF_act">
                    <div style="text-align: center">
                      {{ bunker_C2_CF_act[index] }}
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
                  {{ bunker_C2[7] }}
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
                  {{ bunker_C2[10] }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./PSSM33SVS2N.ts"></script>

<style lang="scss">
@import "./PSSM33SVS2N.scss";
</style>
