#include "lists.h"

/**
 * check_cycle - checks for the efficiency of your solution
 * @list: linked list to be checked
 *
 * Return: 1 if the list succeed,if fail 0 null
 */
int check_cycle(listint_t *list)
{
        listint_t *slow = list;
        listint_t *fast = list;

        if (!list)
                return (0);

        while (slow && fast && fast->next)
        {
                slow = slow->next;
                fast = fast->next->next;
                if (slow == fast)
                        return (1);
        }

        return (0);
}
