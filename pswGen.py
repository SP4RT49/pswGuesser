import random

class PasswordGenerator:
    def __init__(self, words=[], special_chars=[], options={}):
        self.words = words
        self.special_chars = special_chars
        self.options = options
    
    def generate_password(self):
        words = self.get_words()
        special_chars = self.get_special_chars()
        password = ""
        
        for i in range(self.options.get("max_length", 12)):
            if i % 2 == 0:
                password += random.choice(words)
            else:
                password += random.choice(special_chars)
                
        return password
    
    def get_words(self):
        words = []
        for word in self.words:
            if self.options.get("lowercase", False):
                words.append(word.lower())
            elif self.options.get("uppercase", False):
                words.append(word.upper())
            elif self.options.get("capitalize", False):
                words.append(word.capitalize())
            else:
                words.append(word)
                
        if self.options.get("remove_accents", False):
            words = [self.remove_accents(word) for word in words]
                
        if self.options.get("leetspeak", False):
            words = self.get_leet_words(words)
                
        return words
    
    def get_special_chars(self):
        special_chars = self.special_chars
        if self.options.get("all_special_chars", False):
            special_chars += "!@#$%^&*()_+-=[]{}\\|;':\",./<>?"
            
        max_special_chars = self.options.get("max_special_chars", 2)
        num_special_chars = random.randint(1, max_special_chars)
        return [random.choice(special_chars) for i in range(num_special_chars)]
    
    def remove_accents(self, word):
        # code pour retirer les accents
        return word
    
    def get_leet_words(self, words):
        # code pour convertir les mots en leet
        return words
