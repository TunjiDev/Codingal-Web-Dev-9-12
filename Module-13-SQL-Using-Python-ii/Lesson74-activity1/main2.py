import tkinter as tk
import random

# Options
choices = ["Rock", "Paper", "Scissors"]

# Main game logic
def play(player_choice):
    computer_choice = random.choice(choices)
    result = ""

    if player_choice == computer_choice:
        result = "It's a Tie!"
    elif (player_choice == "Rock" and computer_choice == "Scissors") or \
         (player_choice == "Paper" and computer_choice == "Rock") or \
         (player_choice == "Scissors" and computer_choice == "Paper"):
        result = "You Win!"
    else:
        result = "Computer Wins!"

    result_label.config(text=f"You chose: {player_choice}\nComputer chose: {computer_choice}\n{result}")

# GUI setup
root = tk.Tk()
root.title("Rock Paper Scissors Game")
root.geometry("400x300")


tk.Label(root, text="Choose Rock, Paper, or Scissors:")

# Buttons
btn_frame = tk.Frame(root)
btn_frame.pack(pady=10)

tk.Button(btn_frame, text="Rock", width=10, command=lambda: play("Rock")).grid(row=0, column=0, padx=5)
tk.Button(btn_frame, text="Paper", width=10, command=lambda: play("Paper")).grid(row=0, column=1, padx=5)
tk.Button(btn_frame, text="Scissors", width=10, command=lambda: play("Scissors")).grid(row=0, column=2, padx=5)

# Result label
result_label = tk.Label(root, text="", fg="blue")
result_label.pack(pady=20)

root.mainloop()