using System;

namespace ReverseString
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Masukan Kata :");
            string input = Console.ReadLine();
            string output = "";
            for (int i = input.Length - 1; i >= 0; i--)
            {
                output += input[i];
            }
            Console.WriteLine(output);
        }
    }
}