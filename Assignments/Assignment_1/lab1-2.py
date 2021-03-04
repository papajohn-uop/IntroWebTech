################################################
# https://github.com/papajohn-uop/IntroWebTech #
################################################

import requests 

def getName():
    #Simple way to emulate do...while lpop
    while True:
        name = input("Name to search for (at keast 4 chars): ")   
        if len(name)>=4:
            break
    return name

    try:
        page=requests.get(URL)
    except Exception as ex:
        print("Oooops. Something went wrong")
        print(ex)
    
def search(name:str):
    #USe the title method to capitalise only first letter
    print(name.title())
    url="http://ds.upatras.gr/"
    #from firefox inspector the post sends a prameter named surname
    try:
        myobj = {'surname': name.title()}
        page = requests.post(url, data = myobj)
        #print(page.text)
        START_AT="</form>"
        STOP_AT="<!--Στην περίπτωση που"
        data=page.text
        #Get tha part of the response that has the name(s)
        data=((data.split(START_AT))[1].split(STOP_AT)[0])
        #We now have all the data for each εντρυ ασ α λιστ εντρυ 
        names_as_list=data.split("<BR><BR>")
        #remove last entry
        names_as_list.pop()
        for entry in names_as_list:
            #print(entry)
            #lets split each entry again to get specific data
            data_as_list=entry.split("<BR>")
            for d in data_as_list:
               print(d)
            #Name is 1 entry, phone is 3rd entry, email is 4th
            print("NAME->", data_as_list[0])
            #In case some entries do not have full data
            if len(data_as_list)>3:
                print("PHONE->", data_as_list[2])
                print("EMAIL->", data_as_list[3])
            
    except Exception as ex:
        print("Oooops. Something went wrong")
        print(ex)
    




def main():
    print("Introduction to WEB technologies Course")
    print("Assignment 1-2")
    #get name 
    search_for=getName()
    search(search_for)


if __name__ == "__main__":
    main()
