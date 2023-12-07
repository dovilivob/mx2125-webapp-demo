const int xPin = 2;
const int yPin = 3;

void setup() {
  Serial.begin(9600);
  pinMode(xPin, INPUT);
  pinMode(yPin, INPUT);
}

void loop() {
  int pulse_x = pulseIn(xPin, HIGH);
  int pulse_y = pulseIn(yPin, HIGH);


  int acc_x = ((pulse_x / 10) - 500) * 8;
  int acc_y = ((pulse_y / 10) - 500) * 8;

  Serial.print(acc_x);
  Serial.print(",");
  Serial.println(acc_y);
  delay(10);
}
