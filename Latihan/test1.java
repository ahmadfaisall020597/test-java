public class test1 {
    public static void main(String[] args) {
        String s = "asdaSDIlokk";
        int i = 0;
        while (i < s.length()) {
            System.out.println(s);
            s = s.substring(1) + s.substring(0, 1);
            i++;
        }
    }
}