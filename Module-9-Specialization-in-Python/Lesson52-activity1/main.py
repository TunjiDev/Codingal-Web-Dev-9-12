# 1. Import Tkinter Module
# 2. Create the GUI application main Window
# 3. Add widgets

from tkinter import *

# Create the main application window
window = Tk()
window.title('Tkinter Sample Window')
window.geometry('300x300')

# Label
greeting = Label(text="Hello User", fg='black', bg='white')
# Button
button = Button(text="Click me", bg='black', fg='white')
# Entry
entry = Entry(fg="yellow", bg="blue", width=50)

# Pack widgets into the window
greeting.pack()
button.pack()
entry.pack()

# Frame with a label inside
frame = Frame(master=window, relief=RAISED, borderwidth=5)
frame.pack()
label = Label(master=frame, text='Sample Frame')
label.pack()

# Textbox
textbox = Text(fg='green', bg='yellow')
textbox.pack()

# Run the main loop for the window
window.mainloop()