#include <Arduino.h>
#include <U8g2lib.h>
#include "BluetoothSerial.h"

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SH1107_64X128_F_SW_I2C u8g2(U8G2_R1, /* clock=*/SCL, /* data=*/SDA, /* reset=*/U8X8_PIN_NONE);

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;

#define LOGO_BLUETOOTH_HEIGHT 32
#define LOGO_BLUETOOTH_WIDTH 23

static const unsigned char PROGMEM logoBluetooth[] =
    {
        B00000001, B11111111, B00000000, //        #########
        B00000111, B11111111, B11000000, //      #############
        B00001111, B11111111, B11110000, //     ################
        B00011111, B11000111, B11110000, //    #######   #######
        B00111111, B11000011, B11111000, //   ########    #######
        B00111111, B11000001, B11111100, //   ########     #######
        B01111111, B11000000, B11111100, //  #########      ######
        B01111111, B11000000, B01111100, //  #########       #####
        B01111111, B11000100, B00111100, //  #########   #    ####
        B01110001, B11000110, B00011110, //  ###   ###   ##    ####
        B01110000, B11000110, B00011110, //  ###    ##   ##    ####
        B01111000, B01000100, B00111110, //  ####    #   #    #####
        B11111100, B00000000, B01111110, // ######           ######
        B11111110, B00000000, B11111110, // #######         #######
        B11111111, B00000001, B11111110, // ########       ########
        B11111111, B10000011, B11111110, // #########     #########
        B11111111, B10000011, B11111110, // #########     #########
        B11111111, B00000001, B11111110, // ########       ########
        B11111110, B00000000, B11111110, // #######         #######
        B11111100, B00000000, B01111110, // ######           ######
        B01111000, B01000100, B00111110, //  ####    #   #    #####
        B01110000, B11000110, B00011110, //  ###    ##   ##    ####
        B01110001, B11000110, B00011110, //  ###   ###   ##    ####
        B01111111, B11000100, B00111100, //  #########   #    ####
        B01111111, B11000000, B01111100, //  #########       #####
        B01111111, B11000000, B11111100, //  #########      ######
        B00111111, B11000001, B11111100, //   ########     #######
        B00111111, B11000011, B11111000, //   ########    #######
        B00011111, B11000111, B11110000, //    #######   #######
        B00001111, B11111111, B11110000, //     ################
        B00000111, B11111111, B11000000, //      #############
        B00000001, B11111111, B00000000, //        #########
};


void setup()
{
  Serial.begin(115200);
  delay(1000);
  u8g2.begin();
  SerialBT.begin("Kawasaki");
  Serial.println("Aranque");
  delay(1000);
}

void loop()
{
  u8g2.clearBuffer();                  // clear the internal memory
  u8g2.setFont(u8g2_font_6x12_tr);     // choose a suitable font
  u8g2.drawStr(1, 10, "Hello Diego!"); // write something to the internal memory
  u8g2.sendBuffer();                   // transfer internal memory to the display
  delay(500);
  if (SerialBT.available())
  {
    u8g2.clearBuffer();                  // clear the internal memory
    u8g2.drawStr(1, 10, "Hello Diego bluetooth!"); // write something to the internal memory            
    String Valor = SerialBT.readStringUntil('\n');
    Serial.println(Valor);
    u8g2.setCursor(1, 30);
    u8g2.print(Valor);
    if (Valor == "encendido"){
      u8g2.setCursor(1, 40);
      u8g2.print("Igual");
    } else {
      u8g2.setCursor(1, 40);
      u8g2.print("Diferente");
    }
    u8g2.drawBitmap(0, 32, LOGO_BLUETOOTH_HEIGHT, LOGO_BLUETOOTH_WIDTH,  logoBluetooth);  
    u8g2.sendBuffer();
  }
  delay(2000);
}
