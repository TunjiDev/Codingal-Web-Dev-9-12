# Import necessary libraries
from tkinter import *
 
# Setting up Main Window
root = Tk()
root.geometry("400x300")
root.title("main")

# Function to open New (Top Level) Window
def topwin():
    # Setting up Top Window
    top = Toplevel(root)
    top.geometry("180x100")
    top.title("toplevel")
    # Adding a label widget to Top Window
    l2 = Label(top, text="This is toplevel window")
    l2.pack()

# Adding a label and button Widget to Root (Main) Window
l = Label(root, text="This is root window")
btn = Button(root, text="Click here to open another window", command=topwin)

# Arranging widgets
l.pack()
btn.pack()

# Run the main loop for the root window
root.mainloop()