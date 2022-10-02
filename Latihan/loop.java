public class loop {

    public static void main(String[] args) {
        for (int i = 1; i <= 6; i++) {
            for (int j = 6; j >= i; j--) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }

}

// public static void baris(String[] args) {
// int baris = 6;
// for (int i = 1; i <= baris; i++) {
// for (int j = baris; j >= i; j--) {
// System.out.print(j + " ");
// }
// System.out.println();
// }
// }