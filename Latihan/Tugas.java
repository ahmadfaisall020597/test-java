import java.util.Scanner;

public class Tugas {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Masukkan jumlah lompatan: ");
    tugas(scanner.nextInt());
  }

  public static void tugas(int jumlahLompatan) {
    for (int k = 0; k < jumlahLompatan; k++) {
      if (jumlahLompatan > 7) {
        System.out.println("Apa?");
        break;
      }
      for (int i = 1; i <= jumlahLompatan; i++) {
        if (i < jumlahLompatan) {
          System.out.print(i + "");
        } else if (i == jumlahLompatan) {
          System.out.print("Lompat! ");
        }
      }
    }
  }
}